import Link from 'next/link'

export default function StatsuList ({ items }) {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {items.map((item, i) => (
          <div className='' key={i}>
            <Link href='/status/[park]/[slug]' as={`/status/${item.park}/${item.slug}`}>
              <a className='mt-4 block'>
                <div>
                  <h1 className='font-medium'>{item.title_short}</h1>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
