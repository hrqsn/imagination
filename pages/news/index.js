import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'

import PostList from '@/components/posts/post-list'

import { getAllPosts } from '@/lib/api'

export default function News ({ posts }) {
  return (
    <>
      <Head>
        <title>ニュース | Imagination Server</title>
      </Head>

      <Header />

      <section className='w-full section-image' style={{ backgroundImage: 'url("/img/news.png")' }}>
        <div className='w-full h-full flex items-center justify-center'>
          <div>
            <span className='text-xs sm:text-sm block font-medium text-gray-100 subtitle text-center'>NEWS</span>
            <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-white text-center'>ニュース</h1>
          </div>
        </div>
      </section>

      <main className='max-w-4xl mx-auto px-4'>
        <section className='relative pt-32 flex justify-center'>
          {posts.length === 0 ? (
            <p className='text-sm'>ニュースはありません</p>
          ) : (
            <PostList items={posts} />
          )}
        </section>
      </main>

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

  return {
    props: {
      posts: posts
    }
  }
}
