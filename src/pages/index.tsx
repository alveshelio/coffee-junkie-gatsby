import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import About from '../components/about'
import TextContent from '../components/about/textContent'
import Header from '../components/header'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Article from '../components/about/article'
import Title from '../components/about/title'
import P from '../components/about/paragraph'

const Index = () => {
  const data = useStaticQuery(graphql`
    query Images {
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

      aboutImage3: file(relativePath: { eq: "work-1.jpeg" }) {
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

      aboutImage4: file(relativePath: { eq: "work-2.jpeg" }) {
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

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <About>
        <Article>
          <TextContent>
            <Title>Our Story</Title>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, deserunt dolores eos ipsa laborum nam necessitatibus
              quasi. Ad amet at commodi, corporis cupiditate debitis dolores eos
              explicabo modi mollitia nihil nisi odit praesentium qui quibusdam
              sint tempora tenetur ut voluptate.
            </P>
          </TextContent>
          <Image fluid={data.aboutImage1.childImageSharp.fluid} />
        </Article>

        <Article>
          <TextContent>
            <Title>This is a title</Title>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, deserunt dolores eos ipsa laborum nam necessitatibus
              quasi. Ad amet at commodi, corporis cupiditate debitis dolores eos
              explicabo modi mollitia nihil nisi odit praesentium qui quibusdam
              sint tempora tenetur ut voluptate.
            </P>
          </TextContent>
          <Image fluid={data.aboutImage2.childImageSharp.fluid} />
        </Article>

        <Article>
          <TextContent>
            <Title>Our Story</Title>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, deserunt dolores eos ipsa laborum nam necessitatibus
              quasi. Ad amet at commodi, corporis cupiditate debitis dolores eos
              explicabo modi mollitia nihil nisi odit praesentium qui quibusdam
              sint tempora tenetur ut voluptate.
            </P>
          </TextContent>
          <Image fluid={data.aboutImage3.childImageSharp.fluid} />
        </Article>

        <Article>
          <TextContent>
            <Title>This is a title</Title>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, deserunt dolores eos ipsa laborum nam necessitatibus
              quasi. Ad amet at commodi, corporis cupiditate debitis dolores eos
              explicabo modi mollitia nihil nisi odit praesentium qui quibusdam
              sint tempora tenetur ut voluptate.
            </P>
          </TextContent>
          <Image fluid={data.aboutImage4.childImageSharp.fluid} />
        </Article>
      </About>
    </Layout>
  )
}

export default Index
