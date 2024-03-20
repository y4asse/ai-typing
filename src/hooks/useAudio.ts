const useAudio = () => (path: string) => {
  const audio = new Audio(`/sound/${path}.mp3`)
  audio.volume = 1
  audio.play()
}

export default useAudio
