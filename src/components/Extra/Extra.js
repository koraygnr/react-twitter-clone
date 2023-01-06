import React from 'react'
import styles from "./Extra.module.scss"
import Search from '../Search/Search'

function Extra({children}) {
  return (
    <div className={styles.extra}>
      <Search />
    </div>
  )
}

export default Extra