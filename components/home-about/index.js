import Image from 'next/image'
import { useEffect } from 'react'
import { splitLine } from '@/lib/utils/text'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import casts from '@/casts'

import s from './style.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function About () {
  useEffect(() => {
    splitLine(`.${s.header__body}>p`)

    gsap.timeline({
      scrollTrigger: {
        trigger: `.${s.container}`,
        start: 'top center',
        end: 'bottom top'
      }
    }).to(`.${s.header__subtitle}>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2
    }).to(`.${s.header__title}>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      delay: 0.1
    }, '<').to(`.${s.header__body}>p>div>span`, {
      y: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 2,
      delay: 0.4,
      stagger: {
        amount: 0.1
      }
    }, '<').to(`.${s.gallery__item}`, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: 'expo.out',
      stagger: {
        amount: .2
      },
      delay: .4
    }, '<')
  }, [])

  return (
    <section className={s.container}>
      <div className={s.header}>
        <div className={s.header__wrapper}>
          <small className={s.header__subtitle}>
            <span>VISION</span>
          </small>
          <h1 className={s.header__title}>
            <span>いつでも、どこでも、ディズニーへ</span>
          </h1>
          <div className={s.header__body}>
            <p>
              Imagination Serverは、東京ディズニーリゾートを愛する{casts.length}名のメンバーが、<br />Minecraft: Bedrock Editionを用いて完全再現するプロジェクトです。
            </p>
            <p>
              2016年8月に発足したこのプロジェクトは、有志の学生, 社会人によって非営利で運営されています。
            </p>
          </div>
        </div>
      </div>
      <div className={s.gallery}>
        <div className={s.gallery__item}>
          <Image src='/img/gallery-0.webp' layout='fill' alt='gallery' />
        </div>
        <div className={s.gallery__item}>
          <Image src='/img/gallery-1.webp' layout='fill' alt='gallery' />
        </div>
        <div className={s.gallery__item}>
          <Image src='/img/gallery-2.webp' layout='fill' alt='gallery' />
        </div>
      </div>
    </section>
  )
}
