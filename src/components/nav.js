import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav.css'

const Nav = (props) => {
  return (
    <nav className={`nav-nav ${props.rootClassName} `}>
      <div className="nav-container">
        <input
          type="text"
          placeholder={props.Search}
          className="nav-textinput input"
        />
        <Link to="/productspage" className="nav-navlink">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="nav-image"
          />
        </Link>
      </div>
      <Link to="/productspage" className="nav-navlink1">
        {props.Products}
      </Link>
      <Link to="/cartpage" className="nav-navlink2">
        {props.Cart}
      </Link>
      <Link to="/policypage" className="nav-navlink3">
        {props.Policy}
      </Link>
      <a
        href="https://www.facebook.com/profile.php?id=100007804667409"
        target="_blank"
        rel="noreferrer noopener"
        className="nav-link"
      >
        {props.Advise}
      </a>
    </nav>
  )
}

Nav.defaultProps = {
  rootClassName: '',
  Products: 'Sản phẩm',
  Cart: 'Giỏ hàng',
  image_src: '/playground_assets/2089805-200h.png',
  Search: 'Tìm kiếm',
  image_alt: 'image',
  Advise: 'Tư vấn',
  Policy: 'Chính sách',
}

Nav.propTypes = {
  rootClassName: PropTypes.string,
  Products: PropTypes.string,
  Cart: PropTypes.string,
  image_src: PropTypes.string,
  Search: PropTypes.string,
  image_alt: PropTypes.string,
  Advise: PropTypes.string,
  Policy: PropTypes.string,
}

export default Nav
