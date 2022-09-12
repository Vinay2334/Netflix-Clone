import React from 'react'
import Nav from './components/Nav'
import "./HomeScreen.css"
import Banner from './components/Banner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Banner/>
      <Nav/>
    </div>
  )
}

export default HomeScreen
