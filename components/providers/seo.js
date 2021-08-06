import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Imagination Server',
  description: 'Minecraftで東京ディズニーリゾート再現プロジェクト。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://imaginationserver.com',
    site_name: 'Imagination Server',
    title: 'Imagination Server',
    description: 'Minecraftで東京ディズニーリゾート再現プロジェクト。',
    images: [
      {
        url: 'https://imaginationserver.com/img/ogp.png',
        alt: 'Imagination Server'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image'
  }
}

export default function Seo () {
  return (
    <>
      <DefaultSeo {...SeoConfig} />
      <Head>
        <meta name='theme-color' content='#000000' />
      </Head>
    </>
  )
}
