import React from 'react'
import Navbar from '../components/navbar'
import Announcements from '../components/announcements'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider/>
      <Categories />
      <Products />
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default home