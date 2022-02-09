import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  title: 'Imagination Server',
  description: 'Minecraftで東京ディズニーリゾートを再現プロジェクト。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://imaginationserver.com',
    site_name: 'Imagination Server',
    title: 'Imagination Server',
    description: 'Minecraftで東京ディズニーリゾートを再現プロジェクト。',
    images: [
      {
        url: 'https://imaginationserver.com/img/ogp.webp',
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
    </>
  )
}
