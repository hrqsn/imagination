import { useEffect } from 'react'
import Link from 'next/link'
import { splitLine } from '@/lib/utils/text'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import s from './style.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function HomeKanko () {
  useEffect(() => {
    splitLine(`.${s.body}>p`)

    gsap.timeline({
      scrollTrigger: {
        trigger: `.${s.container}`,
        start: 'top center',
        end: 'bottom top'
      }
    }).to(`.${s.title}>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2
    }).to(`.${s.body}>p>div>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      delay: 0.2,
      stagger: {
        amount: 0.1
      }
    }, '<').to(`.${s.button}`, {
      y: 0,
      opacity: 1,
      duration: 4,
      ease: 'expo.out',
      delay: .2
    }, '<')
  }, [])

  return (
    <section className={s.container}>
      <div className={s.inner}>
        <h1 className={s.title}>
          <span>観光企画</span>
        </h1>
        <div className={s.body}>
          <p>
            Imagination Serverでは、忠実に再現されたバーチャルパークを<br />お手持ちのスマートフォンにてお楽しみいただけるイベント「観光企画」を不定期で開催しています。
          </p>
          <p>
            あの人気アトラクションからオリジナルショーまで、全国から集まるゲストの皆様と一緒にお楽しみください。
          </p>
        </div>
        <div className={s.button}>
          <Link href='/visit'>
            <a>詳しく見る</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
