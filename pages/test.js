import React from 'react'
import Head from 'next/head'

import MyConponent from '../components/my-conponent'

const Test = (props) => {
  return (
    <>
      <div className="test-container">
        <Head>
          <title>Test - Hola template</title>
          <meta property="og:title" content="Test - Hola template" />
        </Head>
        <MyConponent rootClassName="my-conponent-root-class-name1"></MyConponent>
      </div>
      <style jsx>
        {`
          .test-container {
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

export default Test
