import React from 'react'
import { Link } from 'gatsby'
import {Badge, Button, Card, CardTitle, CardText, CardSubtitle, CardBody} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const Post = ({title, author, path, date, body,fluid, tags}) => {
    return (
        <Card style = {{marginTop: 60}}>
            <Img className="card-image-top" fluid={fluid}></Img>
            <CardBody>
                <CardTitle>
                    <Link to={path}>{title}</Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by {' '}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>
                    {body}
                </CardText>
                
                    {tags.map(tag => (
                        
                            <Link to={`/tag/${slugify(tag)}`}>
                            <Badge style={{marginRight:10}} color="secondary">{tag}</Badge>
                            </Link>
                        
                    ))}
               
                <Link to={path}><Button color="primary" size="sm" className="float-right">Read More</Button>{' '}</Link>
                
            </CardBody>
        </Card>
    )
}

export default Post
