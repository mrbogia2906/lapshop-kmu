import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './loginpage.css'

const Loginpage = (props) => {
  return (
    <div className="loginpage-container">
      <Helmet>
        <title>Loginpage - LapShop</title>
        <meta property="og:title" content="Loginpage - LapShop" />
      </Helmet>
      <div className="loginpage-container1">
        <label className="loginpage-text">
          <span>Đăng nhập</span>
          <br></br>
          <br></br>
        </label>
        <div className="loginpage-container2">
          <label className="loginpage-account">Tài khoản</label>
          <input
            type="text"
            placeholder="Nhập tài khoản"
            className="loginpage-account1 input"
          />
        </div>
        <div className="loginpage-container3">
          <label className="loginpage-password">Mật khẩu </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="loginpage-password1 input"
          />
        </div>
        <div className="loginpage-container4">
          <div className="loginpage-container5">
            <Link to="/" className="loginpage-navlink">
              Về trang chủ
            </Link>
            <Link to="/" className="loginpage-navlink1">
              Đăng nhập
            </Link>
          </div>
        </div>
        <span className="loginpage-text4">
          <span>Quên mật khẩu</span>
          <br></br>
        </span>
        <Link to="/registerpage" className="loginpage-navlink2">
          <span>Đăng ký</span>
          <br></br>
        </Link>
      </div>
    </div>
  )
}

export default Loginpage
