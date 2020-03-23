import React from 'react'
import styled from 'styled-components'
import { commonTheme } from '../../theme/commonTheme'

import H1 from './h1'

const StyledTitle = styled(H1)`
  font-size: 2rem;
`

const Line = styled.div`
  width: 5rem;
  border-bottom: 0.25rem solid ${commonTheme.colors.light.accent};
`

interface TitleProps {
  children: React.ReactNode
}
const Title = ({ children }: TitleProps) => (
  <StyledTitle>
    {children}
    <Line />
  </StyledTitle>
)

export default Title
