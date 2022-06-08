import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Optimization Architect</title>
        <meta property="og:title" content="Future Optimization Architect" />
      </Helmet>
    </div>
  )
}

export default Home
