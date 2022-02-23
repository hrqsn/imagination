import { useState } from 'react'
import cn from 'classnames'
import s from './style.module.scss'

export default function Tab ({
  items
}) {
  const [active, setActive] = useState(0)

  return (
    <>
      <div className={s.container}>
        <div className={s.inner}>
          {!items ? (
            <span>...</span>
          ) : (
            <>
              {items.map((item, i) => (
                <button
                  className={cn(s.item, active === i && s.active)}
                  key={i}
                  onClick={() => setActive(i)}
                >{item}</button>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
