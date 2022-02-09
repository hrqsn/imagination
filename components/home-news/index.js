import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { ScrollContext } from '@/components/scroller'
import { Arrow } from '@/components/icons'
import gsap from 'gsap'
import dayjs from 'dayjs'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import s from './style.module.scss'

export default function News ({ posts }) {
  const { ready } = useContext(ScrollContext)

  useEffect(() => {
    if (!ready) return

    gsap.timeline({
      scrollTrigger: {
        trigger: `.${s.container}`,
        scroller: '[data-scroll-container]',
        start: 'top center',
        end: 'bottom top'
      }
    }).to(`.${s.header__subtitle}>span`, {
      y: 0,
      opacity: 1,
      ease: 'power3.out',
      duration: 1
    }).to(`.${s.header__title}>span`, {
      y: 0,
      opacity: 1,
      ease: 'power3.out',
      duration: 1,
      delay: 0.1
    }, '<').to(`.${s.news__wrapper}`, {
      opacity: 1,
      y: 0,
      ease: 'power3.out',
      duration: 2,
      delay: 0.2,
      stagger: {
        amount: 0.2
      }
    }, '<').to(`.${s.more}`, {
      opacity: 1,
      y: 0,
      ease: 'power3.out',
      duration: 2,
      delay: 0.4
    }, '<')
  }, [ready])

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <div className={s.header}>
          <small className={s.header__subtitle}>
            <span>NEWS</span>
          </small>
          <h1 className={s.header__title}>
            <span>ニュース</span>
          </h1>
        </div>
        <div className={s.content}>
          <div className={s.news__list}>
            {posts.length === 0
              ? (
                <p className={s.news__blank}>ニュースはありません</p>
                )
              : (
                <>
                  {posts.map((post, i) => (
                    <div className={s.news__wrapper} key={i}>
                      <Link href={`/news/${post.slug}`}>
                        <a className={s.news}>
                          <span className={s.news__date}>{dayjs(post.date).format('YYYY.MM.DD')}</span>
                          <span className={s.news__title}>{post.title}</span>
                        </a>
                      </Link>
                    </div>
                  ))}
                </>
                )}
          </div>
        </div>
        <p className={s.more}>
          <Link href='/news'>
            <a>
              <span>もっと見る</span>
              <Arrow />
            </a>
          </Link>
        </p>
      </div>
    </section>
  )
}