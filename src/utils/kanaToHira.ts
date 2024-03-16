export function kanaToHira(text: string) {
  return text.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60
    return String.fromCharCode(chr)
  })
}
