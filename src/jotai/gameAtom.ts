import { MissType } from '@/types/missType'
import { atom } from 'jotai'

export const defaultGameState = {
  status: 'input' as 'input' | 'playing' | 'result' | 'creating' | 'created',
  thema: '',
  score: 0,
  text: [] as string[],
  hiragana: [] as string[],
  mode: 'standard',
  totalTypeNum: 0,
  totalMissTypeNum: 0,
  typeNum: 0,
  missTypeNum: 0,
  id: '',
  missTypeKey: [] as MissType[],
  totalTimeMiliSec: 0,
  aiModel: 'gpt-3.5-turbo',
  detail: 'についての文章',
  disableRanking: false,
  rankingCount: 0,
  batches: [], //TODO
  sound: true
}

export const gameAtom = atom(defaultGameState)
