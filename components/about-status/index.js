import Link from 'next/link'

import s from './style.module.scss'

export default function AboutStatus () {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <Link href='/status/sea'>
          <a className={s.inner}>
            <span>東京ディズニーシー</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g strokeWidth="1.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg>
          </a>
        </Link>
      </div>
      <div className={s.item}>
        <Link href='/status/land'>
          <a className={s.inner}>
            <span>東京ディズニーランド</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g strokeWidth="1.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polyline points="6.5,3.5 11,8 6.5,12.5 "></polyline></g></svg>
          </a>
        </Link>
      </div>
    </div>
  )
}
