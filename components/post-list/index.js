import Link from 'next/link'
import dayjs from 'dayjs'

import s from './style.module.scss'

export default function PostList ({ posts }) {
  return (
    <div className={s.posts}>
      {posts.map((post, i) => (
        <div className={s.post} key={i}>
          <Link href={`/news/${post.slug}`}>
            <a>
              <img className={s.post__image} src={post.coverImage} alt={post.title} />
              <h4 className={s.post__title}>{post.title}</h4>
              <p className={s.post__date}>{dayjs(post.date).format('YYYY.MM.DD')}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
