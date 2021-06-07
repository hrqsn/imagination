import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Visit () {
  return (
    <>
      <Head>
        <title>お問い合わせ | Imagination Server</title>
      </Head>

      <Header />

      <section className='w-full section-image'　 style={{'backgroundImage': 'url("/img/2.jpg")'}}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>REFERENCE</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-white text-center'>再現資料提供</h1>
          </div>
        </div>
      </section>
      
      <main className='max-w-screen-md mx-auto px-4'>
        <section className='relative pt-32'>
          <p>Imagination Serverでは、より正確な再現を行うため、実際のパークで撮影した資料（写真）を募集しています。</p>
          <p>ご協力いただいた際は、ご希望に応じて私たちのワールドにお名前を記載させていただきます。</p>
          <p className='mt-4'>皆様のご協力をキャスト一同、心よりお待ちしております✨</p>
          <p className='mt-4 text-sm text-gray-500'>＊頂いた資料は再現時の使用に留め、外部に公開することはありません。</p>
          <a href="https://forms.gle/Y2mPhrRB6f24Z2U76" target="_blank" rel="noopener" className='flex mt-8 font-semibold text-blue-600'>フォームはこちら →</a>
        </section>
      </main>

      <Footer />
    </>
  )
}
