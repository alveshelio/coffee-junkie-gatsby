import styled from 'styled-components'
import media from 'styled-media-query'

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('small')`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  `}
`

export default Content
