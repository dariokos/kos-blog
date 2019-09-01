import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import { Badge, Card, CardBody, CardSubtitle, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import {discussionEmbed, DiscussionEmbed} from 'disqus-react'
import { basename } from 'path';

const Post = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  const disqusShortname = 'kos-blog';
  const disqusConfiguration = {
      identifier: data.markdownRemark.id,
      title: post.title,
      url: 'https://5d6bbb6d020196000858a40f--adoring-minsky-c98b11.netlify.com/' + slugify(post.title)
  }
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <Row>
        <Col >
          <Card>
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
            />
            <CardBody>
              <CardSubtitle>
                <span className="text-info">{post.date}</span> by{' '}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <ul className="post-tags" style={{listStyleType: 'none'}}>
                {post.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <Badge color="primary">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfiguration}></DiscussionEmbed>
        </Col>
        
      </Row>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Post