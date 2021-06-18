import Link from 'next/link'

export default function StatsuList ({ items }) {
  return (
    <>
      <div className='mt-6 space-y-3'>
        {items.map((item, i) => (
          <div className='' key={i}>
            <Link href='/status/[park]/[slug]' as={`/status/${item.park}/${item.slug}`}>
              <a className='block'>
                <div>
                  <h1>{item.title_short} →</h1>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
