import React from 'react'
import styled from 'styled-components'
import { useToggle, useWindowSize } from 'react-use'
import Hero from './hero'
import MenuIcon from './icons/menuIcon'
import Menu from './menu'
import Toggle from './toggle'
import VideoHero from './videoHero'

const Container = styled.header`
  display: grid;
  position: relative;
`

const Header = () => {
  const [displayMenu, setDisplayMenu] = useToggle(false)
  const [videoPlay, toggleVideoPlay] = useToggle(true)
  const { width } = useWindowSize()

  return (
    <Container>
      <Menu displayMenu={displayMenu} toggleMenu={setDisplayMenu} />
      <Hero />
      <VideoHero play={videoPlay} />
      <MenuIcon handleOnClick={setDisplayMenu} />
      {width > 768 && <Toggle on={videoPlay} toggle={toggleVideoPlay} />}
    </Container>
  )
}

export default Header
