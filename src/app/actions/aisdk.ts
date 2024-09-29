'use server'
import { createOpenAI } from '@ai-sdk/openai'
import { generateText } from 'ai'

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const model = openai('gpt-4-turbo', {
  // additional settings
})

export const generatePlaceDescription = async (placeName: string) => {
  return generateText({
    model,
    system:
      'Jesteś profesjonalnym pisarzem przewodników miejskich' +
      'Na podstawie wiedzy którą posiadasz opisz budynek/atrakcję o którą zapyta użytkownik' +
      'odpowiedz w 3-5 zdaniach',
    prompt: `${placeName}`,
  })
}
