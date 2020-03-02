import React from 'react'
import styled, { keyframes } from 'styled-components'
import { commonTheme } from '../../theme/commonTheme'
import MenuItem from './MenuIem'

const slideIn = keyframes`
  0% {
    margin-left: -100%;
  }
  100% {
    margin-left: 0;
  }
`

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${commonTheme.colors.light.accent};
  height: 100vh;
  width: 250px;
  position: absolute;
  box-shadow: aliceblue;
  top: 0;
  left: 0;
  animation: ${slideIn} 1s ease-out;
`

interface MenuProps {
  displayMenu: boolean
  toggleMenu: (val?: boolean) => void
}
const Menu = ({ displayMenu, toggleMenu }: MenuProps) =>
  displayMenu ? (
    <Container>
      <MenuItem to="/" handleOnClick={toggleMenu}>
        Menu Iem 1
      </MenuItem>
      <MenuItem to="/" handleOnClick={toggleMenu}>
        Menu Iem 2
      </MenuItem>
      <MenuItem to="/" handleOnClick={toggleMenu}>
        Menu Iem 3
      </MenuItem>
      <MenuItem to="/" handleOnClick={toggleMenu}>
        Menu Iem 4
      </MenuItem>
    </Container>
  ) : null

export default Menu
