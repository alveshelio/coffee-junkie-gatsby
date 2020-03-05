import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Article from './article'
import Content from './content'
import P from './paragraph'
import Title from './title'

const Container = styled.section`
  display: grid;
  padding: 3rem 0;
`

export const About = () => {
  const data = useStaticQuery(graphql`
    query ImageOne {
      aboutImage1: file(relativePath: { eq: "aboutImg-1.jpeg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            srcSet
            tracedSVG
            sizes
          }
        }
      }

      aboutImage2: file(relativePath: { eq: "aboutImg-2.jpeg" }) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            src
            srcSet
            tracedSVG
            sizes
          }
        }
      }
    }
  `)

  console.warn('data', data)

  return (
    <Container>
      <Article>
        <Title>This is a title</Title>
        <Content>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, deserunt dolores eos ipsa laborum nam necessitatibus
            quasi. Ad amet at commodi, corporis cupiditate debitis dolores eos
            explicabo modi mollitia nihil nisi odit praesentium qui quibusdam
            sint tempora tenetur ut voluptate.
          </P>
          <Img fluid={data.aboutImage1.childImageSharp.fluid} />
        </Content>
      </Article>

      <Article>
        <Title>This is a title</Title>
        <Content>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, deserunt dolores eos ipsa laborum nam necessitatibus
            quasi. Ad amet at commodi, corporis cupiditate debitis dolores eos
            explicabo modi mollitia nihil nisi odit praesentium qui quibusdam
            sint tempora tenetur ut voluptate.
          </P>
          <Img fluid={data.aboutImage2.childImageSharp.fluid} />
        </Content>
      </Article>
    </Container>
  )
}
