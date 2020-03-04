import React from 'react'
import styled from 'styled-components'
import { useToggle } from 'react-use'
import Hero from './hero'
import MenuIcon from './icons/menuIcon'
import Menu from './menu/menu'
import Toggle from './toggle'
import VideoHero from './videoHero'

const Container = styled.header`
  display: grid;
  position: relative;
`

const Header = () => {
  const [displayMenu, setDisplayMenu] = useToggle(false)
  const [videoPlay, toggleVideoPlay] = useToggle(true)

  return (
    <Container>
      <Menu displayMenu={displayMenu} toggleMenu={setDisplayMenu} />
      <Hero />
      <VideoHero play={videoPlay} />
      <MenuIcon handleOnClick={setDisplayMenu} />
      <Toggle on={videoPlay} toggle={toggleVideoPlay} />
    </Container>
  )
}

export default Header
