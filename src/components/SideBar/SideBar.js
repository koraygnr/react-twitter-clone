import React from 'react'
import styles from "./SideBar.module.scss"
import Navigation from "../Navigation/Navigation"

function SideBar({ flat }) {
  return (
    <div className={styles.sideBar}>
      <Navigation flat={flat} />
    </div>
  )
}

export default SideBar