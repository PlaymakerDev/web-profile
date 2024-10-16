import Image from 'next/image'
import React from 'react'
import HertaImg from '@/public/images/GZ2NypubEAEkEWH.jpg'
import dynamic from 'next/dynamic'
const TypeWriter = dynamic(() => import('typewriter-effect'), { ssr: false })

const Banner = (props) => {
  const { } = props

  const typeList = [
    'Hi,',
    `I am <strong style="color: rgb(59 130 246);">Playmaker<span style="color: rgb(234 179 8);">Dev</span></strong>`
  ]

  return (
    <>
      <header className='relative w-full'>
        <figure className='overflow-hidden h-96'>
          <Image
            src={HertaImg}
            alt='herta-img'
            className='object-cover object-center bg-no-repeat w-full h-full brightness-50'
          />
        </figure>
        <section className='absolute inset-0 flex items-center justify-center'>
          <TypeWriter
            options={{
              strings: typeList,
              autoStart: true,
              loop: true,
              wrapperClassName: 'text-[5rem]',
              cursorClassName: 'text-[5rem] blinking-cursor'
            }}
          />
        </section>
      </header>
    </>
  )
}

export default React.memo(Banner)
