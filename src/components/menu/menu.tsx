import React from 'react'
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'
import { commonTheme } from '../../theme/commonTheme'
import { LogoIcon } from '../icons/logoIcon'
import MenuItem from './MenuIem'

const slideIn = keyframes`
  0% {
    margin-left: -12rem;
  }
  100% {
    margin-left: 0;
  }
`

interface ContainerProps {
  displayMenu: boolean
}
const Container = styled.nav<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${rgba(commonTheme.colors.light.accent, 0.7)};
  height: 100vh;
  width: 12rem;
  position: fixed;
  box-shadow: 2px 0 15px 2px rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  animation: ${slideIn} 1s ease-out;
  z-index: 3;
`

const LogoContainer = styled.div`
  padding: 0.5rem 1rem;
`

interface MenuProps {
  displayMenu: boolean
  toggleMenu: (val?: boolean) => void
}
const Menu = ({ displayMenu, toggleMenu }: MenuProps) =>
  displayMenu ? (
    <Container displayMenu={displayMenu}>
      <LogoContainer>
        <LogoIcon size={50} fill={commonTheme.colors.light.menu} />
      </LogoContainer>
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
