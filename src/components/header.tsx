import React, { useState } from 'react'
import styled from 'styled-components'
import Hero from './hero'
import MenuIcon from './icons/menuIcon'
import Menu from './menu/menu'
import VideoHero from './videoHero'

const Container = styled.header`
  display: grid;
  position: relative;
`

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false)
  const toggleMenu = () => {
    setDisplayMenu(x => !x)
  }
  return (
    <Container>
      <Menu displayMenu={displayMenu} toggleMenu={toggleMenu} />
      <Hero />
      <VideoHero />
      <MenuIcon handleOnClick={toggleMenu} />
    </Container>
  )
}

export default Header
