import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import markdownToHtml from '@/lib/markdownToHtml'
import { getStatusBySlug, getStatus } from '@/lib/api'

import Header from '@/components/header'
import Footer from '@/components/footer'
import StatusHeader from '@/components/status/status-header'
import StatusBody from '@/components/status/status-body'

export default function StatusPage ({ status }) {
  const router = useRouter()
  if (!router.isFallback && !status?.slug) {
    return <Error statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{status.title} | Imagination Server</title>
      </Head>

      <Header />

      <article className='mt-10 sm:mt-16 max-w-screen-sm mx-auto px-4'>
        <StatusHeader
          title={status.title}
        />
        <StatusBody content={status.content} />
      </article>

      <Footer />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const status = getStatusBySlug('land', params.slug, [
    'title',
    'park',
    'slug',
    'content'
  ])
  const content = await markdownToHtml(status.content || '')

  return {
    props: {
      status: {
        ...status,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const parks = getStatus('land', ['slug'])

  return {
    paths: parks.map((status) => {
      return {
        params: {
          slug: status.slug
        }
      }
    }),
    fallback: false
  }
}
