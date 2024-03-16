const mapList = [
  ['『', ''],
  ['』', ''],
  ['「', ''],
  ['」', ''],
  ['\n', ''],
  ['"', ''],
  [']', ''],
  ['[', ''],
  [' ', ''],
  ['　', ''],
  ['、', ''],
  ['。', ''],
  ['(', ''],
  [')', ''],
  ['）', ''],
  ['（', ''],
  ['》', ''],
  ['《', ''],
  ['×', ''],
  ['・', ''],
  ['”', ''],
  ['“', ''],
  ['’', ''],
  ['‘', ''],
  ['：', ''],
  ['；', ''],
  ['｝', ''],
  ['｛', ''],
  ['＜', ''],
  ['＞', ''],
  ['＿', ''],
  ['＃', ''],
  ['＄', ''],
  ['％', ''],
  ['＆', ''],
  ['＝', ''],
  ['～', ''],
  ['＾', ''],
  ['￥', ''],
  ['｜', ''],
  ['☆', ''],
  ['…', '']
]

export const trimText = (text: string) => {
  let result = text
  mapList.forEach(([from, to]) => {
    result = result.split(from).join(to)
  })
  return result
}

const list = [
  ['\n', ''],
  ['技育展', 'ぎいくてん'],
  ['鬼滅の刃', 'きめつのやいば'],
  ['炭次郎', 'たんじろう'],
  ['銀魂', 'ぎんたま'],
  ['鋼の錬金術師', 'はがねのれんきんじゅつし']
]

export const convertSomeToHiragana = (text: string) => {
  let result = text
  list.forEach(([from, to]) => {
    result = result.split(from).join(to)
  })
  return result
}
