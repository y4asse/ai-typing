import { getMappingData } from './data'

type Res = {
  splitSentence: string[] //きゅ，う，きゅう，しゃ
  romajiCandidates: string[][] //[[],[],[],[],[]]
}

const mappingData = getMappingData()

export const constructTypeSentence = (hiragana: string): Res => {
  if (!hiragana) {
    return { splitSentence: [], romajiCandidates: [] }
  }
  const parsedStr: string[] = []
  const judge: string[][] = []
  let i: number = 0
  while (i < hiragana.length) {
    const uni = hiragana[i]
    const bi = i + 1 < hiragana.length ? hiragana[i] + hiragana[i + 1] : ''
    const tri = i + 2 < hiragana.length ? hiragana[i] + hiragana[i + 1] + hiragana[i + 2] : ''
    let validTypeList: string[] = []
    if (mappingData.has(tri)) {
      validTypeList = mappingData.get(tri) as string[]
      i += 3
      parsedStr.push(tri)
    } else if (mappingData.has(bi)) {
      validTypeList = mappingData.get(bi) as string[]
      i += 2
      parsedStr.push(bi)
    } else {
      const list = mappingData.get(uni)
      if (list) {
        validTypeList = list
      } else {
        validTypeList = [uni]
      }
      i++
      parsedStr.push(uni)
    }
    judge.push(validTypeList)
  }
  return { splitSentence: parsedStr, romajiCandidates: judge }
}
