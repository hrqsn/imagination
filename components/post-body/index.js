import s from './style.module.scss'

export default function PostBody ({ content }) {
  return (
    <div className={s.container}>
      <div
        className='prose'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
