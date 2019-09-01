import React from 'react'
import { Card, CardTitle, CardBody} from 'reactstrap'

import EmailSubscribe from './EmailSubscribe'
import RecentPosts from './RecentPosts'

const Sidebar = () => (
  <div>
    
    <EmailSubscribe />

    <RecentPosts spawn="vertical"/>
    
    
  </div>
)



export default Sidebar