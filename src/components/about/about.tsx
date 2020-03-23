import styled from 'styled-components'
import media from 'styled-media-query'

export const About = styled.section`
  display: grid;
  padding: 3rem 0;
  justify-self: center;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  width: 90vw;

  ${media.greaterThan('medium')`
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  `}
`
