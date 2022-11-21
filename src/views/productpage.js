import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Footer from '../components/footer'
import './productpage.css'

const Productpage = (props) => {
  return (
    <div className="productpage-container">
      <Helmet>
        <title>Productpage - LapShop</title>
        <meta property="og:title" content="Productpage - LapShop" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="productpage-hero">
        <div className="productpage-container1">
          <img
            alt="image"
            src="/playground_assets/sample_laptop-1500h.jpeg"
            className="productpage-image"
          />
          <span className="productpage-text">15.790.000 ₫</span>
        </div>
        <div className="productpage-container2">
          <h1 className="productpage-text01">
            Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6&quot;FHD/Win 11
          </h1>
          <div className="productpage-cpu">
            <button className="productpage-button button">Cpu:</button>
            <button className="productpage-button01 button">
              <span>
                <span className="productpage-text03">i5-1235U</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="productpage-btn-group">
            <button className="productpage-button02 button">Ram</button>
            <button className="productpage-button03 button">
              <span>
                <span className="productpage-text06">8GB</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="productpage-btn-group1">
            <button className="productpage-button04 button">Ổ cứng</button>
            <button className="productpage-button05 button">
              <span>
                <span className="productpage-text09">256GB</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="productpage-btn-group2">
            <button className="productpage-button06 button">Màn hình</button>
            <button className="productpage-button07 button">
              <span>
                <span className="productpage-text12">15.6&apos;&apos;FHD</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="productpage-btn-group3">
            <button className="productpage-button08 button">
              Thêm vào giỏ hàng
            </button>
            <button className="productpage-button09 button">
              <span>
                <span className="productpage-text15">Tư vấn</span>
                <br></br>
              </span>
            </button>
          </div>
          <span className="productpage-text17">
            <br></br>
            <br></br>
            <span>MIỄN PHÍ GIAO HÀNG TẬN NHÀ</span>
            <br></br>
            <br></br>
            <span>
              - Với đơn hàng &lt; 4.000.000 đồng: Miễn phí giao hàng cho đơn
              hàng &lt; 5km tính từ cửa hàng Laptop88 gần nhất
            </span>
            <br></br>
            <span>
              - Với đơn hàng &gt; 4.000.000 đồng: Miễn phí giao hàng (khách hàng
              chịu phí bảo hiểm hàng hóa nếu có)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <div>Placeholder for widget timer</div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Productpage
