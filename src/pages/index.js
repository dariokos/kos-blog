import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

import {Row, Col} from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <h1>Hi people</h1>
        <Row>
          <Col md="8">
        <StaticQuery
            query={indexQuery}
            render={data => {
            return (
                <div>
                    {data
                        .allMarkdownRemark
                        .edges
                        .map(({node}) => (<Post
                            title={node.frontmatter.title}
                            author={node.frontmatter.author}
                            path={node.frontmatter.path}
                            date={node.frontmatter.date}
                            body={node.excerpt}
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            tags={node.frontmatter.tags}/>))}
                </div>
            )
        }}/>
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
        </Row>
    </Layout>
)

const indexQuery = graphql `
query{
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          path
          image {
            childImageSharp{
              fluid(maxWidth:600){
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
