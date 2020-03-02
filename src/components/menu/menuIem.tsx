import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { commonTheme } from '../../theme/commonTheme'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`

const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${commonTheme.colors.light.body};
  font-size: 24px;
  font-weight: 700;
`

interface MenuIemProps {
  children: React.ReactNode
  handleOnClick: () => void
  to: string
}
const MenuItem = ({ children, to, handleOnClick }: MenuIemProps) => (
  <Container>
    <LinkItem to={to} onClick={handleOnClick}>
      {children}
    </LinkItem>
  </Container>
)

export default MenuItem
