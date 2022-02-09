import s from './style.module.scss'

export default function PageHeader ({
  title = 'タイトル',
  image
}) {
  return (
    <div className={s.container}>
      <div className={s.inner} style={ image && { backgroundImage: `url(${image})` }}>
        <h1 className={s.title}>{title}</h1>
      </div>
    </div>
  )
}
