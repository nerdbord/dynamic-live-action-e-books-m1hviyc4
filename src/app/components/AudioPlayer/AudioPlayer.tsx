'use client'
// AudioStream.tsx
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import styles from './AudioPlayer.module.scss'

import { ForwardIcon } from './ForwardIcon'
import { BackIcon } from './BackIcon'
import { PauseIcon } from './PauseIcon'
interface VoiceSettings {
  stability: number
  similarity_boost: number
}

interface AudioPlayerProps {
  voiceId?: string
  text: string
  apiKey: string //TODO:
  voiceSettings: VoiceSettings
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  voiceId = 'JBFqnCBsd6RMkjVDRZzb',
  text,
  apiKey,
  voiceSettings,
}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [audioState, setAudioState] = useState('')
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }
    const setAudioTime = () => setCurrentTime(audio.currentTime)
    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)
    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  }, [])

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

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const time = parseFloat(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
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

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
  const startStreaming = async () => {
    setLoading(true)
    setError('')

    const baseUrl = 'https://api.elevenlabs.io/v1/text-to-speech'
    const headers = {
      'Content-Type': 'application/json',
      'xi-api-key': apiKey,
    }

    const requestBody = {
      text,
      voice_settings: voiceSettings,
      model_id: 'eleven_turbo_v2_5',
      language_code: 'pl',
      style: 0.3,
    }

    try {
      const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
        headers,
        responseType: 'blob',
      })

      if (response.status === 200) {
        // const audio = new Audio(URL.createObjectURL(response.data))
        setAudioState(URL.createObjectURL(response.data))
        // audio.play() // auto play
      } else {
        setError('Error: Unable to stream audio.')
      }
    } catch (error) {
      setError(`Error: Unable to stream audio. ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={startStreaming}
        disabled={loading}
        className={styles.startGenre}
      >
        Start Generate
      </button>
      {error && <p className="error-message">{error}</p>}

      <div className={styles.audioPlayer}>
        <div className={`${styles.liveControl} ${isPlaying && styles.active}`}>
          <div
            className={`${styles.recordDot} ${isPlaying && styles.active}`}
          ></div>
          <p>LIVE AUDIO GUIDE</p>
        </div>
        <audio ref={audioRef} src={audioState} />
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
        <div className={styles.timeControl}>
          <span className={styles.timeDisplay}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeUpdate}
            className="time-slider"
          />
          <span className={styles.timeDisplay}>{formatTime(duration)}</span>
        </div>
      </div>

      <audio>
        <source src={audioState} type="audio/ogg" />
        Test
      </audio>
    </div>
  )
}
