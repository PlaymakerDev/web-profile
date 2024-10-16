import React from 'react'
import styles from '@/styles/components/Layout.module.css'
import Image from 'next/image'
import BarIcon from '@/public/images/bars-solid-white.svg'

const LayoutHeader = (props) => {
  const { } = props

  const listStyle = {
    className: 'cursor-pointer hover:text-blue-500 duration-300 transition'
  }

  return (
    <nav className='px-5 py-5'>
      <div className='flex flex-wrap justify-between'>
        <h1 className='text-2xl font-os-bold text-yellow-500'>Playmaker<span className='text-blue-500'>Dev</span></h1>
        <ul className={styles.unlist_style}>
          <li {...listStyle}>Home</li>
          <li {...listStyle}>Project</li>
          <li {...listStyle}>Contact</li>
        </ul>
        <Image
          src={BarIcon}
          alt='bar-icon'
          width={30}
          height={30}
          className={styles.more_menu}
        />
      </div>
    </nav>
  )
}

export default React.memo(LayoutHeader)
