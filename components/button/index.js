import s from './style.module.scss'

export default function Button ({
  href,
  title,
  target
}) {
  return (
    <a
      className={s.wrapper}
      href={href}
      target={target === '_blank' ? '_blank' : null}
      rel={target === '_blank' ? 'noopener noreferrer' : null}
    >{title}</a>
  )
}
