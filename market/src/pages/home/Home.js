import React from 'react'
import stylus from "./home.module.css"
import Header from './Header'

export const Home = () => {
  return (
    <div className={stylus.container}>
      <Header />
    </div>
  )
}
