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
            src="/playground_assets/sample_laptop-1500w.jpeg"
            className="productpage-image"
          />
          <span className="productpage-text">15.790.000 ₫</span>
        </div>
        <div className="productpage-container2">
          <div className="productpage-container3">
            <div className="productpage-container4">
              <h1 className="productpage-text01">
                Laptop HP 15s-fq5080TU i5-1235U/8GB/256GB/15.6&quot;FHD/Win 11
              </h1>
              <div className="productpage-cpu">
                <button className="productpage-button button">Cpu:</button>
                <button className="productpage-button1 button">
                  <span>
                    <span className="productpage-text03">i5-1235U</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="productpage-btn-group">
                <button className="productpage-button2 button">Ram</button>
                <button className="productpage-button3 button">
                  <span>
                    <span className="productpage-text06">8GB</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="productpage-btn-group1">
                <button className="productpage-button4 button">Ổ cứng</button>
                <button className="productpage-button5 button">
                  <span>
                    <span className="productpage-text09">256GB</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="productpage-btn-group2">
                <button className="productpage-button6 button">Màn hình</button>
                <button className="productpage-button7 button">
                  <span>
                    <span className="productpage-text12">
                      15.6&apos;&apos;FHD
                    </span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="productpage-btn-group3">
                <button className="productpage-button8 button">
                  Thêm vào giỏ hàng
                </button>
                <a
                  href="https://www.facebook.com/profile.php?id=100007804667409"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="productpage-link button"
                >
                  <span>
                    <span className="productpage-text15">Tư vấn</span>
                    <br></br>
                  </span>
                </a>
              </div>
              <span className="productpage-text17">
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
                  - Với đơn hàng &gt; 4.000.000 đồng: Miễn phí giao hàng (khách
                  hàng chịu phí bảo hiểm hàng hóa nếu có)
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
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Productpage
