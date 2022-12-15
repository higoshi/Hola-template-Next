import React from 'react'
import Head from 'next/head'

import MyConponent from '../components/my-conponent'

const IR = (props) => {
  return (
    <>
      <div className="i-r-container">
        <Head>
          <title>IR - Hola template</title>
          <meta property="og:title" content="IR - Hola template" />
        </Head>
        <MyConponent rootClassName="my-conponent-root-class-name"></MyConponent>
      </div>
      <style jsx>
        {`
          .i-r-container {
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

export default IR
