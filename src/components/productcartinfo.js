import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './productcartinfo.css'

const Productcartinfo = (props) => {
  const [isClick, setIsClick] = useState(false)
  return (
    <div className="productcartinfo-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="productcartinfo-image"
      />
      <div className="productcartinfo-productcartinfo">
        <span className="productcartinfo-productname">
          {props.product_name}
        </span>
        <div className="productcartinfo-productprice">
          <span>{props.text2}</span>
          <span>{props.price}</span>
        </div>
        <div className="productcartinfo-productquantity">
          <span className="productcartinfo-text1">{props.text}</span>
          <button
            onClick={() => setIsClick(true)}
            className="productcartinfo-btninc button"
          >
            {props.btn_inc}
          </button>
          <input
            type="text"
            placeholder={props.quantity}
            className="productcartinfo-quantity input"
          />
          <button className="productcartinfo-btndec button">
            {props.btn_dec}
          </button>
          <span className="productcartinfo-delproduct">
            {props.del_product}
          </span>
        </div>
      </div>
    </div>
  )
}

Productcartinfo.defaultProps = {
  text: 'Chọn số lượng:',
  btn_dec: '-',
  image_alt: 'image',
  image_src: '/playground_assets/sample_laptop-200h.jpeg',
  quantity: '1',
  product_name: 'Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6"FHD/Win 11',
  del_product: 'Xoá',
  btn_inc: '+',
  text2: 'Giá:',
  price: 'Text',
}

Productcartinfo.propTypes = {
  text: PropTypes.string,
  btn_dec: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  quantity: PropTypes.string,
  product_name: PropTypes.string,
  del_product: PropTypes.string,
  btn_inc: PropTypes.string,
  text2: PropTypes.string,
  price: PropTypes.string,
}

export default Productcartinfo
