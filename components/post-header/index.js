import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

import s from './style.module.scss'

export default function PostHeader ({ title, coverImage, date }) {
  return (
    <div className={s.container}>
      <Link href='/news'>
        <a className={s.back}>← ニュース</a>
      </Link>
      <h1 className={s.title}>{title}</h1>
      <p className={s.date}>{dayjs(date).format('YYYY.MM.DD')}</p>
      {coverImage && (
        <div className={s.image} >
          <Image src={coverImage} alt={title} layout='fill' />
        </div>
      )}
    </div>
  )
}
