import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'

import headerBG from '../assets/images/coffee.jpg'
import { commonTheme } from '../theme/commonTheme'

const Container = styled.header`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background-size: cover;
  overflow: hidden;

  ${media.lessThan('medium')`
    background: url(${headerBG}) fixed center no-repeat;
  `}
`

const Content = styled.div`
  display: grid;
  justify-content: center;
  z-index: 3;
`

const Title = styled.h1`
  font-family: ${commonTheme.text.fontFamily.headers};
  font-size: 4rem;
  margin: 0;
  text-align: center;
  color: ${commonTheme.colors.light.accent};

  ${media.greaterThan('medium')`
    font-size: 8rem;
  `}
`

const IconsContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 3.5rem);
  grid-column-gap: 0.5rem;
`
const Icon = styled(FontAwesomeIcon)`
  transition: color 0.5s linear;
  &:hover {
    color: ${commonTheme.colors.light.menu};
  }
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${commonTheme.colors.light.accent};
  border: 0.1rem solid ${commonTheme.colors.light.accent};
  border-radius: 50%;
  padding: 0.5rem;
  transition: all 0.5s linear;

  &:hover {
    ${Icon} {
      color: ${commonTheme.colors.light.menu};
    }
    background: ${commonTheme.colors.light.accent};
  }
`

const Hero = () => (
  <Container>
    <Content>
      <Title>Coffee Junkie</Title>
      <IconsContainer>
        <SocialLink href="#">
          <Icon icon={faFacebookSquare} size="2x" />
        </SocialLink>
        <SocialLink href="#">
          <Icon icon={faInstagramSquare} size="2x" />
        </SocialLink>
        <SocialLink href="#">
          <Icon icon={faTwitter} size="2x" />
        </SocialLink>
      </IconsContainer>
    </Content>
  </Container>
)

export default Hero
