import React from 'react'
import About from '../components/about'
import Header from '../components/header'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />
  </Layout>
)

export default Index
