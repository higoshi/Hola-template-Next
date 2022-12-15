import React from 'react'

import PropTypes from 'prop-types'

const NavLinks = (props) => {
  return (
    <>
      <div className="nav-links-links">
        <span className="navLink">{props.Link}</span>
        <span className="navLink">{props.Link1}</span>
        <span className="navLink">{props.Link2}</span>
      </div>
      <style jsx>
        {`
          .nav-links-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          @media (max-width: 767px) {
            .nav-links-links {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

NavLinks.defaultProps = {
  Link1: 'services',
  Link: 'work',
  Link2: 'contact',
}

NavLinks.propTypes = {
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
}

export default NavLinks
