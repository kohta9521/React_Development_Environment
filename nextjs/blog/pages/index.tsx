import { Inter } from '@next/font/google'

import Layout from '../components/layout'
import Hero from '../components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return  <Hero />
}
