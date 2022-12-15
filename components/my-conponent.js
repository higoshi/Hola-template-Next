import React from 'react'

import PropTypes from 'prop-types'

const MyConponent = (props) => {
  return (
    <>
      <div className={`my-conponent-container ${props.rootClassName} `}>
        <h1>{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .my-conponent-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

MyConponent.defaultProps = {
  heading: 'Heading',
  rootClassName: '',
}

MyConponent.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MyConponent
