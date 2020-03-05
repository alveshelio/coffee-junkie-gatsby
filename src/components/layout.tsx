import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { commonTheme } from '../theme/commonTheme'
import bodyBG from '../assets/images/bodyBcg.jpeg'

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${commonTheme.text.fontFamily.body};
    color: ${commonTheme.colors.light.body};
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${bodyBG});
    }
`

const LayoutContainer = styled.main`
  display: grid;
`

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={{ mode: 'light' }}>
        <LayoutContainer>{children}</LayoutContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout
//
// import Header from './header'
// import './layout.css'
//
// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//
//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }
//
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }
//
// export default Layout
