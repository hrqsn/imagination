import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import gsap from 'gsap'
import cn from 'classnames'

import s from './style.module.scss'

export default function Header () {
  const router = useRouter()
  const [open, setOpen] = useState(null)

  useEffect(() => {
    let active = -1
    let hover = 0
    const links = []
    const left = document.querySelector(`.${s.navigation__links}`).getBoundingClientRect().left
    
    document.querySelectorAll(`.${s.navigation__link}`).forEach((link, i) => {
      const config = {
        x: link.getBoundingClientRect().left - left,
        width: link.getBoundingClientRect().width,
        margin: (link.getBoundingClientRect().width - 12) / 2
      }
      links.push(config)

      if (link.classList.contains(s.active)) {
        active = i
        hover = i
        document.querySelector(`.${s['navigation__link--bar']}`).style.transform = `translateX(${config.x + config.margin}px)`
      }

      link.addEventListener('mouseenter', () => handleHover(i))
      link.addEventListener('click', () => handleClick(i))
    })
    document.querySelector(`.${s.navigation__links}`).addEventListener('mouseleave', handleLeave)

    function handleHover (i) {
      hover = i
      gsap.to(`.${s['navigation__link--bar']}`, {
        x: links[i].x + links[i].margin
      })
    }

    function handleClick (i) {
      active = i
      hover = i
    }

    function handleLeave () {
      if (hover === active) return
      gsap.to(`.${s['navigation__link--bar']}`, {
        x: links[active < 0 ? 0 : active].x + links[active < 0 ? 0 : active].margin
      })
    }

    if (active < 0) {
      gsap.set(`.${s['navigation__link--bar']}`, {
        opacity: 0
      })
    } else {
      gsap.to(`.${s['navigation__link--bar']}`, {
        x: links[active].x + links[active].margin,
        opacity: 1
      })
    }
  }, [router.pathname])

  const toggleMenu = () => setOpen(!open)
  const tapRoot = () => {
    if (open) setOpen(false)
  }

  useEffect(() => {
    if (open === null) return

    if (open) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'

      gsap.timeline()
      .to(`.${s['navigation__menu--btn']}>span:nth-child(1)`, {
        y: 3.5,
        duration: .2,
        ease: 'expo.out'
      }).to(`.${s['navigation__menu--btn']}>span:nth-child(2)`, {
        y: -3.5,
        duration: .2,
        ease: 'expo.out'
      }, '<').set(`.${s['navigation__menu--btn']}>span:nth-child(2)`, {
        width: 20
      }).to(`.${s['navigation__menu--btn']}>span:nth-child(1)`, {
        rotation: 45,
        duration: .4,
        ease: 'expo.out'
      }).to(`.${s['navigation__menu--btn']}>span:nth-child(2)`, {
        rotation: -45,
        duration: .4,
        ease: 'expo.out'
      }, '<')
    } else {
      gsap.timeline({
        onComplete: () => {
          document.documentElement.style.overflow = null
          document.body.style.overflow = null
        }
      })
      .to(`.${s['navigation__menu--btn']}>span:nth-child(1)`, {
        rotation: 0,
        duration: .2,
        ease: 'expo.out'
      }).to(`.${s['navigation__menu--btn']}>span:nth-child(2)`, {
        rotation: 0,
        duration: .2,
        ease: 'expo.out'
      }, '<').set(`.${s['navigation__menu--btn']}>span:nth-child(2)`, {
        width: 16
      }).to(`.${s['navigation__menu--btn']}>span:nth-child(1)`, {
        y: 0,
        duration: .4,
        ease: 'expo.out'
      }).to(`.${s['navigation__menu--btn']}>span:nth-child(2)`, {
        y: 0,
        duration: .4,
        ease: 'expo.out'
      }, '<')
    }
  }, [open])

  function active (pathname) {
    if (router.pathname === pathname) return true
    return false
  }

  return (
    <>
      <header className={s.navigation}>
        <div className={s.navigation__wrapper}>
          <div className={s.navigation__inner}>
            <div className={s.navigation__root}>
              <Link href='/'>
                <a className={s['navigation__root--logo']} onClick={tapRoot}>
                  <img src='/img/logo.svg' alt='Imagination Server' width={161} height={20} />
                </a>
              </Link>
            </div>
            <div className={s.navigation__nav}>
              <nav className={s.navigation__links}>
                <Link href='/'>
                  <a className={cn(s.navigation__link, active('/') && s.active)}>ホーム</a>
                </Link>
                <Link href='/about'>
                  <a className={cn(s.navigation__link, active('/about') && s.active)}>活動について</a>
                </Link>
                <Link href='/visit'>
                  <a className={cn(s.navigation__link, active('/visit') && s.active)}>観光企画</a>
                </Link>
                <Link href='/news'>
                  <a className={cn(s.navigation__link, active('/news') && s.active)}>ニュース</a>
                </Link>
                <Link href='/blog'>
                  <a className={cn(s.navigation__link, active('/blog') && s.active)}>ブログ</a>
                </Link>
                <Link href='/contact'>
                  <a className={cn(s.navigation__link, active('/contact') && s.active)}>お問い合わせ</a>
                </Link>
              </nav>
              <span className={s['navigation__link--bar']} />
            </div>
            <div className={cn(s.navigation__menu, open && s['is-open'])}>
              <button className={s['navigation__menu--btn']} onClick={toggleMenu} arealabel='Hamburger Menu'>
                <span />
                <span />
              </button>
              <div className={s['navigation__menu--overlay']} />
              <div className={s['navigation__menu--nav']}>
                <div className={s['navigation__menu--inner']}>
                  <nav className={s['navigation__menu--links']}>
                    <Link href='/'>
                      <a className={cn(s['navigation__menu--link'], active('/') && s.active)} onClick={toggleMenu}>
                        <span>ホーム</span>
                      </a>
                    </Link>
                    <Link href='/about'>
                      <a className={cn(s['navigation__menu--link'], active('/about') && s.active)} onClick={toggleMenu}>
                        <span>活動について</span>
                      </a>
                    </Link>
                    <Link href='/visit'>
                      <a className={cn(s['navigation__menu--link'], active('/visit') && s.active)} onClick={toggleMenu}>
                        <span>観光企画</span>
                      </a>
                    </Link>
                    <Link href='/news'>
                      <a className={cn(s['navigation__menu--link'], active('/news') && s.active)} onClick={toggleMenu}>
                        <span>ニュース</span>
                      </a>
                    </Link>
                    <Link href='/blog'>
                      <a className={cn(s['navigation__menu--link'], active('/blog') && s.active)} onClick={toggleMenu}>
                        <span>ブログ</span>
                      </a>
                    </Link>
                    <Link href='/contact'>
                      <a className={cn(s['navigation__menu--link'], active('/contact') && s.active)} onClick={toggleMenu}>
                        <span>お問い合わせ</span>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
