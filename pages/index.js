import { useEffect } from 'react'
import Hero from '@/components/home-hero'
import About from '@/components/home-about'
import Member from '@/components/home-member'
import News from '@/components/home-news'
import { getAllPosts } from '@/lib/api'

export default function Home ({ posts }) {
  useEffect(() => {
    const lazyVideos = [].slice.call(document.querySelectorAll('video.lazyload'))

    if ('IntersectionObserver' in window) {
      const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((video) => {
          if (video.isIntersecting) {
            for (let source in video.target.children) {
              const videoSource = video.target.children[source]
              if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
                videoSource.src = videoSource.dataset.src
              }
            }
  
            video.target.load()
            video.target.classList.remove('lazyload')
            lazyVideoObserver.unobserve(video.target)
          }
        });
      });
  
      lazyVideos.forEach((lazyVideo) => {
        lazyVideoObserver.observe(lazyVideo)
      })
    }
  } ,[])

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
