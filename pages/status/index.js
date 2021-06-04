import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

import StatusList from '@/components/status/status-list'

import { getStatus } from '@/lib/api'

export default function Status ({ land, sea }) {
  return (
    <>
      <Head>
        <title>再現状況 | Imagination Server</title>
      </Head>

      <Header />

      <section className='w-full section-image'　 style={{'backgroundImage': 'url("/img/news.png")'}}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>Recreation Status</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-white text-center'>再現状況</h1>
          </div>
        </div>
      </section>

      <main className='max-w-4xl mx-auto px-4'>
        <section className='relative pt-32 flex'>
          <h1>東京ディズニーランド</h1>
          {land.length === 0 ? (
            <p className='text-sm'>状況データがありません</p>
          ) : (
            <StatusList items={land} />
          )}
        </section>
        <section className='relative pt-32 flex'>
          <h1>東京ディズニーシー</h1>
          {sea.length === 0 ? (
            <p className='text-sm'>状況データがありません</p>
          ) : (
            <StatusList items={sea} />
          )}
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const land = getStatus('land', [
    'slug',
    'title',
    'title_short',
    'park'
  ])
  const sea = getStatus('sea', [
    'slug',
    'title',
    'title_short',
    'park'
  ])

  return {
    props: {
      land: land,
      sea: sea
    }
  }
}
