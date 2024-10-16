import React from 'react'
import HomeScreen from '@/features/home/screen'
import LayoutContent from '@/components/layout/LayoutContent'

const HomePage = (props) => {
  const { } = props

  return (
    <LayoutContent>
      <HomeScreen />
    </LayoutContent>
  )
}

export default React.memo(HomePage)
