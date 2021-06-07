export default function StatusBody ({ content }) {
  return (
    <div className='max-w-screen-sm mx-auto mt-8 sm:mt-12'>
      <div
        className='mt-8 prose'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
