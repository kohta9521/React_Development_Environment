import Container from '../components/container.js'
import { Inter } from '@next/font/google'

// components import area
import Hero from '../components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container>
        <Hero 
        title = "CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
        />
      </Container>

    </>
  )
}
