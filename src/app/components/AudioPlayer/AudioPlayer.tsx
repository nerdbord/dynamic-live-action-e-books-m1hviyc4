'use client'
// AudioStream.tsx
import React, { useState, useRef, useEffect } from 'react'
import styles from './AudioPlayer.module.scss'

import { ForwardIcon } from './ForwardIcon'
import { BackIcon } from './BackIcon'
import { PauseIcon } from './PauseIcon'

type AudioData = {
  audio_base64: ArrayBuffer
  alignment: {
    characters: string[]
    character_start_times_seconds: number[]
    character_end_times_seconds: number[]
  }
  normalized_alignment: {
    characters: string[]
    character_start_times_seconds: number[]
    character_end_times_seconds: number[]
  }
}

interface AudioPlayerProps {
  text: string
}

export const AudioPlayer = ({ text }: AudioPlayerProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [characters, setCharacters] = useState(['TEST'])
  const [startTimings, setStartTimings] = useState([0])
  const [endTimings, setEndTimings] = useState([0])
  const audioRef = useRef<null | HTMLAudioElement>(null)
  const [highlightedText, setHighlightedText] = useState<JSX.Element[]>([])

  useEffect(() => {
    const updateHighlight = () => {
      const newHighlightedText = []
      let currentSentence = ''
      let isHighlighted = false

      for (let i = 0; i < characters.length; i++) {
        const char = characters[i]
        const startTime = startTimings[i]
        const endTime = endTimings[i]

        if (currentTime >= startTime && currentTime <= endTime) {
          isHighlighted = true
        }

        currentSentence += char

        if (
          ['.', ',', '!', '?'].includes(char) ||
          i === characters.length - 1
        ) {
          newHighlightedText.push(
            <span
              key={i}
              className={`${styles.colorTransition} ${
                isHighlighted ? styles.textHighlighted : styles.textStandard
              }`}
            >
              {currentSentence}
            </span>,
          )
          currentSentence = ''
          isHighlighted = false
        }
      }

      setHighlightedText(newHighlightedText)
    }

    const interval = setInterval(updateHighlight, 100)

    return () => clearInterval(interval)
  }, [currentTime, characters, startTimings, endTimings])

  const generateAndPlaySpeech = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/generateVoiceWithTimestamps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: AudioData = await response.json()

      if (audioRef.current) {
        audioRef.current.src = `data:audio/mp3;base64,${data.audio_base64}`
        audioRef.current.play()
      }

      setCharacters(data.alignment.characters)
      setStartTimings(data.alignment.character_start_times_seconds)
      setEndTimings(data.alignment.character_end_times_seconds)
    } catch (error) {
      console.error('Error generating speech:', error)
    } finally {
      setIsLoading(false)
    }
  }
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeSubtract = () => {
    setIsPlaying(false)
    const audio = audioRef.current

    if (!audio) return
    setIsPlaying(false)
    audio.pause()

    const newTime = Math.max(currentTime - 10, 0)
    audio.currentTime = newTime
    setCurrentTime(newTime)

    setIsPlaying(true)
    audio.play()
  }
  const handleTimeAdd = () => {
    setIsPlaying(false)
    const audio = audioRef.current

    if (!audio) return
    setIsPlaying(false)
    audio.pause()

    const newTime = Math.max(currentTime + 10, 0)
    audio.currentTime = newTime
    setCurrentTime(newTime)

    setIsPlaying(true)
    audio.play()
  }

  return (
    <div>
      <button
        onClick={generateAndPlaySpeech}
        disabled={isLoading}
        className={styles.startGenre}
      >
        Start Generate
      </button>
      {/* {error && <p className="error-message">{error}</p>} */}
      <div className={styles.audioPlayer}>
        <div className={`${styles.liveControl} ${isPlaying && styles.active}`}>
          <div
            className={`${styles.recordDot} ${isPlaying && styles.active}`}
          ></div>
          <p>LIVE AUDIO GUIDE</p>
        </div>
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onEnded={() => setIsPlaying(false)}
        />
        <div className={styles.controls}>
          <button
            className={`${styles.controlButton} ${styles.controlButton}`}
            onClick={handleTimeSubtract}
          >
            <BackIcon />
          </button>
          <button
            onClick={togglePlayPause}
            className={`${styles.controlButton} ${styles.playPauseButton}`}
          >
            {isPlaying ? <PauseIcon /> : <PauseIcon />}
          </button>
          <button
            className={`${styles.controlButton} ${styles.forwardButton}`}
            onClick={handleTimeAdd}
          >
            <ForwardIcon />
          </button>
        </div>
      </div>
      <div>{highlightedText}</div>
    </div>
  )
}
