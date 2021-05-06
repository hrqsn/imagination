import Link from 'next/link'
import Moment from 'react-moment'

export default function PostList ({ items }) {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {items.map((item, i) => (
          <div className='' key={i}>
            <Link href='/news/[slug]' as={`/news/${item.slug}`}>
              <a className='block'>
                <div className='hover-image'>
                  <img src={item.coverImage} className='block rounded-md' />
                </div>
              </a>
            </Link>
            <Link href='/news/[slug]' as={`/news/${item.slug}`}>
              <a className='mt-4 block'>
                <div>
                  <h1 className='font-medium'>{item.title}</h1>
                  <p className='mt-1 text-sm text-gray-600 word-clamp'>{item.subtitle}</p>
                  <p className='mt-1.5 text-sm text-gray-500'><Moment format='YYYY.MM.DD'>{item.date}</Moment></p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
