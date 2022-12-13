import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './accountpage.css'

const Accountpage = (props) => {
  return (
    <div className="accountpage-container">
      <Helmet>
        <title>Accountpage - LapShop</title>
        <meta property="og:title" content="Accountpage - LapShop" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="accountpage-hero">
        <div className="accountpage-container1">
          <img
            alt="image"
            src="/playground_assets/23b068a2-c383-44af-bca4-221b374722c1_rw_1200%20%5B1%5D-400h.png"
            className="accountpage-image"
          />
        </div>
        <div className="accountpage-container2">
          <div className="accountpage-container3">
            <div className="accountpage-container4">
              <div className="accountpage-container5">
                <h1 className="accountpage-text">Thông tin tài khoản</h1>
                <div className="accountpage-cpu">
                  <button className="accountpage-button button">
                    Tên tài khoản
                  </button>
                  <button className="accountpage-button1 button">
                    <span>
                      <span className="accountpage-text02">Cuong1234</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="accountpage-btn-group">
                  <button className="accountpage-button2 button">
                    Số điện thoại
                  </button>
                  <button className="accountpage-button3 button">
                    <span>
                      <span className="accountpage-text05">0123456789</span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="accountpage-btn-group1">
                  <button className="accountpage-button4 button">
                    Địa chỉ
                  </button>
                  <button className="accountpage-button5 button">
                    <span>
                      <span className="accountpage-text08">
                        25B Phan Dang Luu St. Ward 3,Ho Chi Minh City,Vietnam
                      </span>
                      <br></br>
                    </span>
                  </button>
                </div>
                <div className="accountpage-btn-group2">
                  <Link
                    to="/update-accountpage"
                    className="accountpage-navlink button"
                  >
                    Cập nhật thông tin
                  </Link>
                </div>
              </div>
            </div>
            <h1>Lịch sử mua hàng</h1>
          </div>
          <div className="accountpage-container6">
            <div className="accountpage-producthistory">
              <img
                alt="image"
                src="/playground_assets/sample_laptop-200h.jpeg"
                className="accountpage-image1"
              />
              <div className="accountpage-productcartinfo">
                <span className="accountpage-productname">
                  Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6&quot;FHD/Win 11
                </span>
                <div className="accountpage-productprice">
                  <span>Giá:</span>
                  <span>Text</span>
                </div>
                <div className="accountpage-productquantity">
                  <span className="accountpage-text12">Số lượng:</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="accountpage-producthistory1">
              <img
                alt="image"
                src="/playground_assets/sample_laptop-200h.jpeg"
                className="accountpage-image2"
              />
              <div className="accountpage-productcartinfo1">
                <span className="accountpage-productname1">
                  Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6&quot;FHD/Win 11
                </span>
                <div className="accountpage-productprice1">
                  <span>Giá:</span>
                  <span>Text</span>
                </div>
                <div className="accountpage-productquantity1">
                  <span className="accountpage-text15">Số lượng:</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="accountpage-producthistory2">
              <img
                alt="image"
                src="/playground_assets/sample_laptop-200h.jpeg"
                className="accountpage-image3"
              />
              <div className="accountpage-productcartinfo2">
                <span className="accountpage-productname2">
                  Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6&quot;FHD/Win 11
                </span>
                <div className="accountpage-productprice2">
                  <span>Giá:</span>
                  <span>Text</span>
                </div>
                <div className="accountpage-productquantity2">
                  <span className="accountpage-text18">Số lượng:</span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Accountpage
