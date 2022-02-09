import Hero from '@/components/home-hero'
import About from '@/components/home-about'
import Member from '@/components/home-member'
import News from '@/components/home-news'
import { getAllPosts } from '@/lib/api'

export default function Home ({ posts }) {
  return (
    <>
      <Hero />
      <About />
      <Member />
      <News posts={posts} />
    </>
  )
}

export async function getStaticProps () {
  const allPosts = getAllPosts('news', [
    'slug',
    'title',
    'date'
  ])
  const posts = allPosts.slice(0, 3)

  return {
    props: {
      posts: posts
    }
  }
}
