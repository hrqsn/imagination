import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Visit () {
  return (
    <>
      <Head>
        <title>観光企画 | Imagination Server</title>
      </Head>

      <Header />

      <section className='w-full section-image'　 style={{'backgroundImage': 'url("/img/visit.jpg")'}}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>KANKO KIKAKU</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-white text-center'>観光企画</h1>
          </div>
        </div>
      </section>
      
      <main className='max-w-screen-lg mx-auto px-4'>
        <section className='relative pt-32'>
          <p className='text-lg font-semibold text-center'>準備中</p>
          <p className='mt-2 text-sm text-center'>Coming Soon.</p>
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
