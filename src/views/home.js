import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Product from '../components/product'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>LapShop</title>
        <meta property="og:title" content="LapShop" />
      </Helmet>
      <NavBar></NavBar>
      <div className="home-hero">
        <h1 className="home-text">Let&apos;s keep things organized</h1>
        <span className="home-text01">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
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
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
        </span>
        <div className="home-btn-group">
          <button className="home-button button">
            <span>
              <span className="home-text09">Thêm vào giỏ hàng</span>
              <br></br>
            </span>
          </button>
          <Link to="/productpage" className="home-navlink button">
            Chi Tiết
          </Link>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text11">Nổi bật</h1>
        <div className="home-container1">
          <Product rootClassName="rootClassName"></Product>
          <Product rootClassName="rootClassName1"></Product>
          <Product rootClassName="rootClassName2"></Product>
          <Product rootClassName="rootClassName3"></Product>
          <Product rootClassName="rootClassName7"></Product>
          <Product rootClassName="rootClassName6"></Product>
          <Product rootClassName="rootClassName5"></Product>
          <Product rootClassName="rootClassName4"></Product>
        </div>
      </div>
      <div className="home-features1">
        <Link to="/productspage" className="home-navlink1">
          <h1 className="home-text12">Danh sách</h1>
        </Link>
        <div className="home-container2">
          <Product rootClassName="rootClassName"></Product>
          <Product rootClassName="rootClassName1"></Product>
          <Product rootClassName="rootClassName2"></Product>
          <Product rootClassName="rootClassName3"></Product>
          <Product rootClassName="rootClassName7"></Product>
          <Product rootClassName="rootClassName6"></Product>
          <Product rootClassName="rootClassName5"></Product>
          <Product rootClassName="rootClassName4"></Product>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
