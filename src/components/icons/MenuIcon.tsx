import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { commonTheme } from '../../theme/commonTheme'

const Container = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
`
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`
const Icon = styled(FontAwesomeIcon)`
  color: ${commonTheme.colors.light.accent};
  font-size: 2rem;
  animation: ${pulse} 2s infinite;

  &:hover {
    cursor: pointer;
  }
`
interface MenuIconProps {
  handleOnClick: () => void
}

const MenuIcon = ({ handleOnClick }: MenuIconProps) => (
  <Container>
    <Icon icon={faBars} onClick={handleOnClick} />
  </Container>
)

export default MenuIcon
