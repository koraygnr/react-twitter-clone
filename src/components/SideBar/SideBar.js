import React from 'react'
import styles from "./SideBar.module.scss"
import Navigation from "../Navigation/Navigation"
import ThemeButton from '../Button/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import { CreateTweetIcon } from '../Icons'

function SideBar({ flat }) {
  return (
    <div className={styles.sideBar}>
      <Navigation flat={flat} />
      
      <div className={styles.tweetButton}>
      <ThemeButton full={!flat} >
            {
                flat ? <CreateTweetIcon color="white" /> : <span>Tweetle</span>
            }
      </ThemeButton>
      </div>
      <div className={styles.profileBox}>
          <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default SideBar