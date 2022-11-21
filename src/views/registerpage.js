import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './registerpage.css'

const Registerpage = (props) => {
  return (
    <div className="registerpage-container">
      <Helmet>
        <title>Registerpage - LapShop</title>
        <meta property="og:title" content="Registerpage - LapShop" />
      </Helmet>
      <div className="registerpage-container1">
        <label className="registerpage-text">
          <span>Đăng ký</span>
          <br></br>
          <br></br>
        </label>
        <div className="registerpage-container2">
          <label className="registerpage-account">Tài khoản</label>
          <input
            type="text"
            placeholder="Nhập tài khoản"
            className="registerpage-account1 input"
          />
        </div>
        <div className="registerpage-container3">
          <label className="registerpage-password">Mật khẩu </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="registerpage-password1 input"
          />
        </div>
        <div className="registerpage-container4">
          <label className="registerpage-password2">Xác nhận</label>
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            className="registerpage-password3 input"
          />
        </div>
        <div className="registerpage-container5">
          <div className="registerpage-container6">
            <Link to="/" className="registerpage-navlink">
              Về trang chủ
            </Link>
            <Link to="/" className="registerpage-navlink1">
              <span>Đăng ký</span>
              <br></br>
            </Link>
          </div>
        </div>
        <Link to="/loginpage" className="registerpage-navlink2">
          Đăng nhập
        </Link>
      </div>
    </div>
  )
}

export default Registerpage
