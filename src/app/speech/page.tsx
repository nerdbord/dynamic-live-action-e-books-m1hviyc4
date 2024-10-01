'use server'
import { AudioPlayer } from '../components/AudioPlayer/AudioPlayer'

export default async function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Eleven Labs Text-to-Speech Demo
      </h1>
      <AudioPlayer text="Zamek Wawelski w Krakowie to jeden z najważniejszych zabytków Polski, położony na Wzgórzu Wawelskim nad Wisłą. Był siedzibą polskich królów i symbolem władzy królewskiej, a jego historia sięga XI wieku, łącząc w sobie elementy gotyku, renesansu i baroku. Dziś pełni funkcję muzeum, gdzie można podziwiać królewskie komnaty, skarbiec i słynną Katedrę Wawelską, miejsce koronacji i pochówków władców." />
    </div>
  )
}
