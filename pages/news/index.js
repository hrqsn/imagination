import dynamic from 'next/dynamic'
import PageHeader from '@/components/page-header'
import SectionWrapper from '@/components/section-wrapper'
import PostList from '@/components/post-list'
import { getAllPosts } from '@/lib/api'

export default function News ({
  posts
}) {
  return (
    <>
      <PageHeader
        title='ニュース'
        image='/img/news.webp'
      />

      <SectionWrapper>
        <PostList posts={posts} />
      </SectionWrapper>
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

