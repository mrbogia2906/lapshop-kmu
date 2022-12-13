import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './update-accountpage.css'

const UpdateAccountpage = (props) => {
  return (
    <div className="update-accountpage-container">
      <Helmet>
        <title>UpdateAccountpage - LapShop</title>
        <meta property="og:title" content="UpdateAccountpage - LapShop" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="update-accountpage-hero">
        <div className="update-accountpage-container1">
          <img
            alt="image"
            src="/playground_assets/23b068a2-c383-44af-bca4-221b374722c1_rw_1200%20%5B1%5D-400h.png"
            className="update-accountpage-image"
          />
        </div>
        <div className="update-accountpage-container2">
          <h1 className="update-accountpage-text">Cập nhật thông tin </h1>
          <div className="update-accountpage-btn-group">
            <label className="update-accountpage-text1">Số điện thoại</label>
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="input"
            />
          </div>
          <div className="update-accountpage-btn-group1">
            <label className="update-accountpage-text2">
              Địa chỉ           
            </label>
            <input
              type="text"
              placeholder="Nhập địa chỉ"
              className="update-accountpage-textinput1 input"
            />
          </div>
          <div className="update-accountpage-btn-group2">
            <button className="update-accountpage-button button">
              Cập nhật thông tin
            </button>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default UpdateAccountpage
