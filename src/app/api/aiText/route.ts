import { convertToKatakana } from '@/utils/convertToKatakana'
import { kanaToHira } from '@/utils/kanaToHira'
import { trimText } from '@/utils/trimText'
import OpenAI from 'openai'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { thema } = body
    const openai = new OpenAI()
    const tools = [
      {
        type: 'function',
        function: {
          name: 'get_current_weather',
          description: 'Get the current weather in a given location',
          parameters: {
            type: 'object',
            properties: {
              location: {
                type: 'string',
                description: 'The city and state, e.g. San Francisco, CA'
              },
              unit: { type: 'string', enum: ['celsius', 'fahrenheit'] }
            },
            required: ['location']
          }
        }
      }
    ]

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'あなたはユーザからのテーマに基づいて、タイピング用文章を作成するアシスタントです。ユーザからのテーマに関連した40文字程度の文章を5つ生成して次のようなJSON形式で返してください。{ 1: string, 2: string, 3: string, 4: string, 5: string }'
        },
        { role: 'user', content: thema }
      ],
      model: 'gpt-4-turbo-preview',
      response_format: { type: 'json_object' }
    })

    if (!completion.choices[0].message.content) {
      throw new Error('[OpenAI] completion.choices[0].message.content is not found.')
    }
    const content: {
      [key: number]: string
    } = JSON.parse(completion.choices[0].message.content)

    let data: { text: string; hiragana: string }[] = []
    for (const key in content) {
      const text = content[key]
      const tirmedText = trimText(text)
      const katakana = await convertToKatakana(tirmedText)
      const hiragana = kanaToHira(katakana)
      data.push({ text: tirmedText, hiragana })
    }
    return Response.json({ data })
  } catch (error) {
    console.error(error)
    return Response.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
