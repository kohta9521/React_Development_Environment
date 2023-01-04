import { Inter } from '@next/font/google'

// components import area
import Hero from '../components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero 
        title = "CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      />
    </>
  )
}
