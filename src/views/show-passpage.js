import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './show-passpage.css'

const ShowPasspage = (props) => {
  return (
    <div className="show-passpage-container">
      <Helmet>
        <title>ShowPasspage - LapShop</title>
        <meta property="og:title" content="ShowPasspage - LapShop" />
      </Helmet>
      <div className="show-passpage-container1">
        <div className="show-passpage-container2">
          <label className="show-passpage-text">
            <span>Mật khẩu của bạn là:     </span>
            <br></br>
          </label>
          <span>12345677</span>
        </div>
        <div className="show-passpage-container3">
          <div className="show-passpage-container4">
            <Link to="/" className="show-passpage-navlink">
              Về trang chủ
            </Link>
          </div>
        </div>
        <Link to="/loginpage" className="show-passpage-navlink1">
          Đăng nhập
        </Link>
      </div>
    </div>
  )
}

export default ShowPasspage
