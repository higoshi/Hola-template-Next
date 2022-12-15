import React from 'react'
import Head from 'next/head'

import NavLinks from '../components/nav-links'

const Hola = (props) => {
  return (
    <>
      <div className="hola-container">
        <Head>
          <title>Hola - Hola template</title>
          <meta property="og:title" content="Hola - Hola template" />
        </Head>
        <NavLinks rootClassName="nav-links-root-class-name"></NavLinks>
      </div>
      <style jsx>
        {`
          .hola-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Hola
