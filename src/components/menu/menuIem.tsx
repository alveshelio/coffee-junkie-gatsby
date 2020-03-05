import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rgba } from 'polished'
import { commonTheme } from '../../theme/commonTheme'

const LinkItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${commonTheme.colors.light.menu};
  font-size: 1.5rem;
  font-weight: 700;
  transition: all 0.5s ease-out;

  &:hover {
    background: ${commonTheme.colors.light.menu};
    color: ${rgba(commonTheme.colors.light.accent, 0.7)};
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  }
`

interface MenuIemProps {
  children: React.ReactNode
  handleOnClick: () => void
  to: string
}
const MenuItem = ({ children, to, handleOnClick }: MenuIemProps) => (
  <LinkItem to={to} onClick={handleOnClick}>
    {children}
  </LinkItem>
)

export default MenuItem
