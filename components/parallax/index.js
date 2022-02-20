import s from './style.module.scss'

export default function Parallax ({ speed, children }) {
  return (
    <div className={s.wrapper}>
      <div
        className={s.inner}
      >
        {children}
      </div>
    </div>
  )
}
