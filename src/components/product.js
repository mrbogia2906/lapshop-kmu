import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './product.css'

const Product = (props) => {
  return (
    <div className={`product-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src="/playground_assets/sample_laptop-200h.jpeg"
        className="product-image"
      />
      <Link to="/productpage" className="product-navlink">
        {props.text}
      </Link>
      <span className="product-text">{props.text1}</span>
    </div>
  )
}

Product.defaultProps = {
  text1: '15.790.000 ₫',
  text: 'Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6"FHD/Win 11',
  image_alt: 'image',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
}

Product.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Product
