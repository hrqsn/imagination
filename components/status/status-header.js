import Link from 'next/link'
import dayjs from 'dayjs'

export default function StatusHeader ({ title, last_update }) {
  return (
    <>
      <Link href='/status'>
        <a className='text-gray-600 text-sm'>← 再現状況</a>
      </Link>
      <h1 className='mt-4 text-xl font-semibold'>{title}</h1>
      <p className='mt-2 text-sm text-gray-600'>最終更新：{dayjs(last_update).format('YYYY-MM-DD')}</p>
    </>
  )
}
