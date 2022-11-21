import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Productcartinfo from '../components/productcartinfo'
import Footer from '../components/footer'
import './cartpage.css'

const Cartpage = (props) => {
  return (
    <div className="cartpage-container">
      <Helmet>
        <title>Cartpage - LapShop</title>
        <meta property="og:title" content="Cartpage - LapShop" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="cartpage-cart">
        <div className="cartpage-categoryproducts">
          <Productcartinfo></Productcartinfo>
        </div>
        <div className="cartpage-btncart">
          <div className="cartpage-sum">
            <span className="cartpage-text">Tổng tiền thanh toán:</span>
            <span className="cartpage-sumprice">
              <span>16.000.000Đ</span>
              <br></br>
            </span>
          </div>
          <div className="cartpage-btnoptioncart">
            <button className="cartpage-btnorder button">
              Tiến hành đặt hàng
            </button>
            <Link to="/" className="cartpage-btnbuymore button">
              <span>
                <span>Chọn thêm sản phẩm khác</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Cartpage
