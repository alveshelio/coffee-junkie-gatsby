import React from 'react'
import styled from 'styled-components'
import { commonTheme } from '../../theme/commonTheme'

import H1 from './h1'

const Line = styled.div`
  width: 100px;
  border-bottom: 2px solid ${commonTheme.colors.light.accent};
`

interface TitleProps {
  children: React.ReactNode
}
const Title = ({ children }: TitleProps) => (
  <>
    <H1>{children}</H1>
    <Line />
  </>
)

export default Title
