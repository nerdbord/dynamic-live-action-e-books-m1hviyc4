'use client'
// AudioStream.tsx
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

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
  const [volume, setVolume] = useState(1)

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

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const newVolume = parseFloat(e.target.value)
    audio.volume = newVolume
    setVolume(newVolume)
  }

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return

    const time = parseFloat(e.target.value)
    audio.currentTime = time
    setCurrentTime(time)
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
      <button onClick={startStreaming} disabled={loading}>
        Start Generate
      </button>
      {error && <p>{error}</p>}

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <audio ref={audioRef} src={audioState} />
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="flex items-center">
            <span className="mr-2">Volume</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeUpdate}
            className="flex-grow"
          />
          <span className="ml-2">{formatTime(duration)}</span>
        </div>
      </div>

      <audio>
        <source src={audioState} type="audio/ogg" />
        Test
      </audio>
    </div>
  )
}
