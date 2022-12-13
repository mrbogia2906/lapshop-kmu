import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-contact">
          <span className="footer-text">{props.text10}</span>
          <span className="">{props.text12}</span>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text12: '091 234 5678',
  text10: 'Liên hệ',
  rootClassName: '',
}

Footer.propTypes = {
  text12: PropTypes.string,
  text10: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
