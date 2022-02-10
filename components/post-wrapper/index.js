import s from './style.module.scss'

export default function PostWrapper ({ children }) {
  return (
    <div className={s.container}>
      {children}
    </div>
  )
}
