import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>HEADER</header>

      <main>
        <div>
          <h1>CUBE</h1>
          <p>アウトプットしていくサイト</p>
        </div>
      </main>

      <fooer>FOOTER</fooer>
    </>
  )
}
