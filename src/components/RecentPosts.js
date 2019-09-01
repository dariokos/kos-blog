import React from 'react'
import { Card, CardTitle, CardBody, Row, Col} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'


const RecentPosts = (props) => {
    
    let posts;
    
    if(props.spawn == "vertical"){
        posts = (
            <Card style={{marginTop: 60}}>
            <CardBody>
                <CardTitle className="mb-3">
                Recent Posts
                </CardTitle>
                <StaticQuery
                query={sidebarQuery}
                render={data => (
                    <div>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Card key={node.id} style={{marginTop: 10}}>
                        <Link to={node.frontmatter.path}>
                            <Img
                            className="card-image-top"
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            />
                        </Link>
                        <CardBody>
                            <CardTitle style={{marginBottom: 0}}>
                            <Link to={node.frontmatter.path}>
                                {node.frontmatter.title}
                            </Link>
                            </CardTitle>
                        </CardBody>
                        </Card>
                    ))}
                    </div>
                )}
                />
            </CardBody>
            </Card>
        );
    } else {
        posts = (
            <Card style={{marginTop: 60}}>
            <CardBody>
                <CardTitle className="mb-3">
                Recent Posts
                </CardTitle>
                <StaticQuery
                query={sidebarQuery}
                render={data => (
                    <Row>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Col>
                        <Card key={node.id} style={{marginTop: 10}}>
                        <Link to={node.frontmatter.path}>
                            <Img
                            className="card-image-top"
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            />
                        </Link>
                        <CardBody>
                            <CardTitle style={{marginBottom: 0}}>
                            <Link to={node.frontmatter.path}>
                                {node.frontmatter.title}
                            </Link>
                            </CardTitle>
                        </CardBody>
                        </Card>
                        </Col>
                    ))}
                    </Row>
                )}
                />
            </CardBody>
            </Card>
        );
    }
    
    



    return posts;
            
    
}

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`


export default RecentPosts
