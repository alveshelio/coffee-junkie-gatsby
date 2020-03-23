import styled from 'styled-components'
import media from 'styled-media-query'
import TextContent from './textContent'

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('small')`
    grid-column-gap: 1rem;
    grid-template-rows: auto 1fr;
    
    &:nth-child(even) {
      & ${TextContent} {
        order: 1;
        margin-top: 2rem;
      }
    }
  `}

  ${media.greaterThan('medium')`
    grid-template-rows: 1fr 1fr;
  `}
`

export default Article
