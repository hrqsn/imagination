export default function Layout ({ children }) {
  return (
    <>
      <div className='max-w-screen-lg mx-auto px-4'>
        {children}
      </div>
    </>
  )
}
