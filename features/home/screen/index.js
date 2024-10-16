import React from 'react'
import Image from 'next/image'
import SampleImg from '@/public/images/Untitled_Artwork.png'
import Banner from '../components/Banner'

const HomeScreen = (props) => {
  const { } = props

  return (
    <>
      <Banner />
    </>
  )
}

export default React.memo(HomeScreen)
