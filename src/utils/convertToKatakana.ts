import kuromoji from 'kuromoji'
import { convertSomeToHiragana } from './trimText'

export function convertToKatakana(text: string): Promise<string> {
  const tirmedText = convertSomeToHiragana(text)
  return new Promise((resolve, reject) => {
    kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, tokenizer) => {
      if (err) {
        reject(err)
      } else {
        const tokens = tokenizer.tokenize(tirmedText)
        const katakana = tokens.map((token) => (token.reading ? token.reading : token.surface_form)).join('')
        resolve(katakana)
      }
    })
  })
}
