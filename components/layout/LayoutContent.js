import React from 'react'
import LayoutHeader from './LayoutHeader'

const LayoutContent = (props) => {
  const { children } = props

  return (
    <>
      <header>
        <LayoutHeader />
      </header>
      <main className='h-screen w-full'>
        {children}
      </main>
      <footer>

      </footer>
    </>
  )
}

export default React.memo(LayoutContent)
