import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './reset-passpage.css'

const ResetPasspage = (props) => {
  return (
    <div className="reset-passpage-container">
      <Helmet>
        <title>ResetPasspage - LapShop</title>
        <meta property="og:title" content="ResetPasspage - LapShop" />
      </Helmet>
      <div className="reset-passpage-container1">
        <label className="reset-passpage-text">
          <span>Khôi phục mật khẩu</span>
          <br></br>
          <br></br>
        </label>
        <div className="reset-passpage-container2">
          <label className="reset-passpage-account">Email       </label>
          <input
            type="text"
            placeholder="Nhập email"
            className="reset-passpage-account1 input"
          />
        </div>
        <div className="reset-passpage-container3">
          <label className="reset-passpage-account2">Tài khoản</label>
          <input
            type="text"
            placeholder="Nhập tài khoản"
            className="reset-passpage-account3 input"
          />
        </div>
        <div className="reset-passpage-container4">
          <div className="reset-passpage-container5">
            <Link to="/" className="reset-passpage-navlink">
              Về trang chủ
            </Link>
            <span className="reset-passpage-text4">
              <Link to="/">Xác minh</Link>
              <br></br>
            </span>
          </div>
        </div>
        <Link to="/loginpage" className="reset-passpage-navlink2">
          Đăng nhập
        </Link>
      </div>
    </div>
  )
}

export default ResetPasspage
