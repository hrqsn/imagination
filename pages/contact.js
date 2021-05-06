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

      <section className='w-full section-image'　 style={{'backgroundImage': 'url("/img/3.jpg")'}}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>CONTACT</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-white text-center'>お問い合わせ</h1>
          </div>
        </div>
      </section>
      
      <main className='max-w-screen-lg mx-auto px-4'>
        <section className='relative pt-32'>
          <p className='text-center'>質問やご連絡等は「カスタマーサポート」TwitterアカウントのDMまでお願いいたします。</p>
          <a href='https://twitter.com/imasaba_support/' target='_blank' rel='noopener noreferrer' className='block mt-2 underline text-blue-800 text-center'>問い合わせる →</a>
          {/* <div className='relative w-full'>
            <figure className='lg:-mx-8'>
              <div className='mt-24 rounded-md section-image' style={{'backgroundImage': 'url("/img/visit.jpg")'}}></div>
            </figure>
          </div> */}
        </section>
      </main>

      <Footer />
    </>
  )
}
