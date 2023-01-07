import React from 'react'
import styles from "./Extra.module.scss"
import Search from '../Search/Search'
import Box from "../Box/Box"
import Footer from '../Footer/Footer'

function Extra() {
  return (
    <div className={styles.extra}>
      <Search />
      <Box />
      <Footer />
    </div>
  )
}

export default Extra