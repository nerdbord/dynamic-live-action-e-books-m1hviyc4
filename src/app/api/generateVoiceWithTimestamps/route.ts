import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const apiKey = process.env.ELEVENLABS_API_KEY

  if (!apiKey) {
    throw new Error(`Nie podano klucza api`)
  }

  const headers = {
    'Content-Type': 'application/json',
    'xi-api-key': apiKey,
  }

  try {
    const requestBody = await req.json()
    const voiceId = requestBody.voiceId || 'JBFqnCBsd6RMkjVDRZzb'
    const baseUrl = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`

    const elevenLabsResponse = await fetch(baseUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        text: requestBody.text || 'test test',
        voice_settings: requestBody.voice_settings || {
          stability: 0.5,
          similarity_boost: 0.7,
          style: 0.6,
        },
        model_id: requestBody.model_id || 'eleven_turbo_v2_5',
        language_code: requestBody.language_code || 'pl',
      }),
    })

    if (!elevenLabsResponse.ok) {
      console.log(elevenLabsResponse)
      throw new Error(
        `Eleven Labs API error! status: ${elevenLabsResponse.status}`,
      )
    }

    return new NextResponse(elevenLabsResponse.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error: Unable to generate speech.', error)
    console.log(error)

    return new NextResponse(
      JSON.stringify({ error: 'Unable to generate speech' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
