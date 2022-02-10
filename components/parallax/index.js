import useParallax from '@/lib/hooks/use-parallax'

import s from './style.module.scss'

export default function Parallax ({ speed, children }) {
  useParallax()

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
