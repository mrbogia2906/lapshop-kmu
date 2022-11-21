import React from 'react'

import { Helmet } from 'react-helmet'

import NavBar from '../components/nav-bar'
import Product from '../components/product'
import Footer from '../components/footer'
import './productspage.css'

const Productspage = (props) => {
  return (
    <div className="productspage-container">
      <Helmet>
        <title>Productspage - LapShop</title>
        <meta property="og:title" content="Productspage - LapShop" />
      </Helmet>
      <NavBar rootClassName="nav-bar-root-class-name"></NavBar>
      <div className="productspage-features">
        <h1 className="productspage-text">Danh mục</h1>
        <div className="productspage-container1">
          <Product rootClassName="rootClassName"></Product>
          <Product rootClassName="rootClassName1"></Product>
          <Product rootClassName="rootClassName2"></Product>
          <Product rootClassName="rootClassName3"></Product>
          <Product rootClassName="rootClassName7"></Product>
          <Product rootClassName="rootClassName6"></Product>
          <Product rootClassName="rootClassName5"></Product>
          <Product rootClassName="rootClassName4"></Product>
        </div>
        <div className="productspage-container2">
          <Product rootClassName="rootClassName"></Product>
          <Product rootClassName="rootClassName1"></Product>
          <Product rootClassName="rootClassName2"></Product>
          <Product rootClassName="rootClassName3"></Product>
          <Product rootClassName="rootClassName7"></Product>
          <Product rootClassName="rootClassName6"></Product>
          <Product rootClassName="rootClassName5"></Product>
          <Product rootClassName="rootClassName4"></Product>
        </div>
        <div className="productspage-container3">
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
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Productspage
