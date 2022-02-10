import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PostWrapper from '@/components/post-wrapper'
import PostHeader from '@/components/post-header'
import PostBody from '@/components/post-body'
import markdownToHtml from '@/lib/markdownToHtml'
import { getPostBySlug, getAllPosts } from '@/lib/api'

export default function Blog ({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post.title} | Imagination Server</title>
      </Head>

      <PostWrapper>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        <PostBody content={post.content} />
      </PostWrapper>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug('news', params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage'
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
  const posts = getAllPosts('news', ['slug'])

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
