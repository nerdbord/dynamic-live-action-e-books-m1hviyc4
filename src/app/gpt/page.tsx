import { generatePlaceDescription } from '../actions/aisdk'

export default async function Home() {
  const { text } = await generatePlaceDescription('Zamek Wawelski')
  return <main style={{ position: 'relative' }}>{text}</main>
}
