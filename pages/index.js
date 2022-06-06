import Head from 'next/head'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/home-hero'
const About = dynamic(() => import('@/components/home-about'))
const Kanko = dynamic(() => import('@/components/home-kanko'))
const Member = dynamic(() => import('@/components/home-member'))
const News = dynamic(() => import('@/components/home-news'))
import { getAllPosts } from '@/lib/api'

export default function Home ({ posts }) {
  useEffect(() => {
    const lazyAssets = [].slice.call(document.querySelectorAll('.lazyload'))

    if ('IntersectionObserver' in window) {
      const lazyAssetsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((asset) => {
          if (asset.isIntersecting) {
            for (let source in asset.target.children) {
              const assetSource = asset.target.children[source]
              if (typeof assetSource.tagName === 'string' && assetSource.tagName === 'SOURCE') {
                assetSource.src = assetSource.dataset.src
              }
            }
  
            asset.target.load()
            asset.target.classList.remove('lazyload')
            lazyAssetsObserver.unobserve(asset.target)
          }
        })
      })
  
      lazyAssets.forEach((lazyAsset) => {
        lazyAssetsObserver.observe(lazyAsset)
      })
    }
  } ,[])

  return (
    <>
      <Head>
        <title>トップ - Imagination Server</title>
      </Head>

      <Hero />
      <About />
      <Kanko />
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
