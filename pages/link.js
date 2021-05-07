import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Links () {
  return (
    <>
      <Head>
        <title>リンク集 | Imagination Server</title>
      </Head>

      <Header />
      
      <main className='max-w-sm mx-auto px-4'>
        <section className='relative pt-32 space-y-4'>
          <a href='https://imaginationserver.com/' className='flex w-full py-3 bg-gray-900 rounded-md text-white text-sm items-center justify-center'>
            ホームページ
          </a>
          <a href='https://twitter.com/tdr_mcpe_server/' target="_blank" rel="noopener" className='flex w-full py-3 rounded-md text-white text-sm items-center justify-center' style={{backgroundColor: '#00ACEE'}}>
            Twitter
          </a>
          <a href='https://www.youtube.com/channel/UC8qQMaR5Ee3t6Mh973OfLuw/' target="_blank" rel="noopener" className='flex w-full py-3 rounded-md text-white text-sm items-center justify-center' style={{backgroundColor: '#f00'}}>
            YouTube
          </a>
          <a href='https://www.instagram.com/tdr_imaginationserver/' target="_blank" rel="noopener" className='flex w-full py-3 rounded-md text-white text-sm items-center justify-center' style={{backgroundColor: '#5851DB'}}>
            Instagram
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
