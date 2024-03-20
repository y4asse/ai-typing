export const calcScore = (totalWordNumber: number, totalTimeMSec: number, totalMisstypeNum: number) => {
  if (totalTimeMSec === 0) {
    totalTimeMSec = 1
  }
  const totalTimeSec = totalTimeMSec / 1000
  const WPM = (totalWordNumber / totalTimeSec) * 60
  const accuracy = 1 - totalMisstypeNum / totalWordNumber
  const score = Math.round(WPM * (accuracy * accuracy * accuracy))
  return { score, WPM }
}

export const calcKpm = (keyCount: number, timeMiliSec: number) => {
  if (timeMiliSec == 0) {
    return 0
  }
  const totalTimeSec = timeMiliSec / 1000
  const kpm = Math.floor((keyCount / totalTimeSec) * 600) / 10
  return kpm
}

export const calcAccuracy = (totalWordNumber: number, totalMisstypeNum: number) => {
  if (totalWordNumber === 0) {
    return 0
  }
  const accuracy = Math.floor((1 - totalMisstypeNum / totalWordNumber) * 1000) / 10
  return accuracy
}
