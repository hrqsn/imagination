import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PostBody from '@/components/posts/post-body'

import markdownToHtml from '@/lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '@/lib/api'

export default function Terms ({ post }) {
  return (
    <>
      <Head>
        <title>利用規約 | Imagination Server</title>
      </Head>

      <Header />

      <main className='max-w-screen-lg mx-auto px-4'>
        <div className='py-32'>
          <span className='text-sm block font-medium text-blue-800 subtitle text-center'>TERMS</span>
          <h1 className='mt-1 text-xl sm:text-2xl font-semibold text-center'>利用規約</h1>
        </div>
        <PostBody content={post.content} />
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug('documents', params.slug, [
    'title',
    'slug',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllPosts('documents', ['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
