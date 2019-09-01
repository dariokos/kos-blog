import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'
import RecentPosts from '../components/RecentPosts'

const tags = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="All tags">
      <SEO title="All tags" keywords={['tags', 'topics']} />
      <h2 style={{marginTop: 90, marginBottom: 30}}>List of tags:</h2>
      <ul style={{listStyleType: 'none'}}>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: '10px' }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
      <RecentPosts spawn="horizontal"/>
    </Layout>
  )
}

export default tags