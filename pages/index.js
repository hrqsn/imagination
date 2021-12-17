import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Moment from 'react-moment'

import { getAllPosts } from '@/lib/api'
import casts from '../casts'

export default function Home ({ letestPosts }) {
  return (
    <>
      <Head>
        <title>ホーム | Imagination Server</title>
      </Head>

      <Header />

      <section className='hero'>
        <div className='hero-text'>
          <div className='w-full h-full header-text text-white'>
            <h1>Imagination!</h1>
            <p className='mt-2 text-sm'>Minecraftで東京ディズニーリゾート®︎を再現プロジェクト</p>
          </div>
        </div>
        <div className='video-wrapper'>
          <video className='video' autoPlay playsInline loop muted>
            <source src='/bg.webm' type='video/webm' />
            <source src='/bg.mp4' type='video/mp4' />
          </video>
        </div>
      </section>

      <Layout>
        <section className='mt-6 pb-32'>
          <div className='relative mt-12 mb-30 md:flex md:space-x-12'>
            <div className='flex items-center justify-between md:flex-col md:items-baseline md:justify-start'>
              <h4 className='font-bold'>新着ニュース</h4>
              <Link href='/news'>
                <a className='block mt-2 text-sm text-gray-600'>一覧を見る</a>
              </Link>
            </div>
            <div className='hidden md:block border-r border-gray-400' />
            <div className='mt-6 md:mt-0 space-y-2'>
              {letestPosts.length === 0 ? (
                <p className='text-sm'>ニュースはありません</p>
              ) : (
                <>
                  {letestPosts.map((post, i) => (
                    <div className='text-sm flex space-x-6' key={i}>
                      <span className='font-bold'><Moment format='YYYY.MM.DD'>{post.date}</Moment></span>
                      <Link href={`/news/${post.slug}`}>
                        <a className='block underline line-clamp-multiple'>{post.title}</a>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
        <section className='relative py-32'>
          <div className='text-sm font-medium text-blue-800 subtitle s-line scroll-fx fx-slide'>VISION</div>
          <h1 className='mt-1 text-2xl sm:text-4xl font-bold scroll-fx fx-slide'>いつでも、どこでも、<br className='block sm:hidden' />ディズニーへ</h1>
          <p className='mt-10 scroll-fx fx-c'>Imagination Serverは、東京ディズニーリゾート®︎を愛する{casts.length}名のメンバーが、<br className='hidden sm:inline-block' />Minecraft: Bedrock Editionを用いて完全再現する試みです。<br />&nbsp;<br />2017年8月に発足したこのプロジェクトは、<br className='hidden sm:inline-block' />有志の社会人/学生によって非営利で運営されています。</p>
          <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <img className='rounded scroll-fx fx-c' src='/img/1.webp' alt='ホテルミラコスタ' loading='lazy' />
            <img className='rounded scroll-fx fx-c' src='/img/2.webp' alt='ホテルミラコスタ2' loading='lazy' />
            <img className='rounded scroll-fx fx-c' src='/img/3.webp' alt='マーメイドラグーン' loading='lazy' />
            <img className='rounded scroll-fx fx-c' src='/img/4.webp' alt='シンデレラ城' loading='lazy' />
          </div>
        </section>
        <section className='relative py-32'>
          <span className='text-sm block font-medium text-blue-800 subtitle text-center scroll-fx fx-c'>MEMBERS</span>
          <h1 className='mt-1 text-2xl sm:text-3xl font-bold text-center scroll-fx fx-c'>メンバー</h1>
          <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-16'>
            {casts.map((cast, index) => (
              <div className='text-center scroll-fx fx-c' key={index}>
                <img className='rounded-full w-28 h-28 object-cover mx-auto' src={`/img/casts/${cast.id}.webp`} alt='メンバー' loading='lazy' />
                <h1 className='mt-3 text-md font-bold'>{cast.name}</h1>
                <p className='mt-1 text-sm text-gray-600'>{cast.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className='relative py-32'>
          <span className='text-sm block font-medium text-blue-800 subtitle text-center scroll-fx fx-c'>EVENTS</span>
          <h1 className='mt-1 text-2xl sm:text-3xl font-bold text-center scroll-fx fx-c'>イベント</h1>
          {/* イベントなしの場合 */}
          {/* <p className='mt-16 text-center'>イベントはありません</p> */}
          
          {/* イベント一覧 */}
          <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Link href='/news/visit2021w'>
              <a className='block'>
                <div className='news-banner rounded bg-blue-700 hover:bg-blue-800 p-6 text-white scroll-fx fx-c'>
                  <h1 className='font-bold'>観光企画「Imagination Server 5th Anniversary ~fantastic symphony~」を開催！</h1>
                  <p className='mt-2 text-sm line-clamp-multiple'>Imagination Server 5周年を記念した観光イベントを開催します✨</p>
                  <p className='mt-2 text-xs text-gray-200'>クリスマス, ニューイヤーズ・イヴ</p>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </Layout>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const posts = getAllPosts('news', [
    'slug',
    'title',
    'subtitle',
    'coverImage',
    'date'
  ])
  // 最新の3つのニュースを抽出
  const letestPosts = posts.slice(0, 3)

  return {
    props: {
      letestPosts: letestPosts
    }
  }
}
