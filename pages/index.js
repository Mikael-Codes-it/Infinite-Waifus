import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Simple from 'pages/Simple'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Infinite Waifu Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Infinite Waifu Website" />
          <div className='app'>
            <Simple />
        </div>
      </main>

      <Footer />
    </div>
  )
}
