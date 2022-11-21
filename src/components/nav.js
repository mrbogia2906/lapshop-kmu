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
        <Link to="/cartpage" className="nav-navlink">
          <svg viewBox="0 0 1024 1024" className="nav-icon">
            <path
              d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"
              className=""
            ></path>
          </svg>
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
  Search: 'Tìm kiếm',
  Advise: 'Tư vấn',
  Policy: 'Chính sách',
}

Nav.propTypes = {
  rootClassName: PropTypes.string,
  Products: PropTypes.string,
  Cart: PropTypes.string,
  Search: PropTypes.string,
  Advise: PropTypes.string,
  Policy: PropTypes.string,
}

export default Nav
