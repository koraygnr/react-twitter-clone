import React from 'react'
import styles from "./Extra.module.scss"

function Extra({children}) {
  return (
    <div className={styles.extra}>
      {children}
    </div>
  )
}

export default Extra