import { createContext, ReactNode, useContext } from 'react'
import useSound from 'use-sound'

const SoundContext = createContext(() => {})

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [play] = useSound('sound.wav')

  return <SoundContext.Provider value={play}>{children}</SoundContext.Provider>
}

export const usePlaySound = () => {
  const context = useContext(SoundContext)

  if (context === undefined) {
    throw new Error(
      'You must wrap your app with <SoundProvider /> to use usePlaySound()',
    )
  }

  return context
}
