import React, { useState } from 'react'
import styles from "./SideBar.module.scss"
import Navigation from "../Navigation/Navigation"
import ThemeButton from '../Button/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import { CreateTweetIcon } from '../Icons'
import Modal from '../Modal/Modal'

function SideBar({ flat }) {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className={styles.sideBar}>
      <Navigation flat={flat} />
      <div className={styles.tweetButton}>
        <ThemeButton 
          full={!flat}  
          onClick={()=>setIsOpen(true)}
        >
          {
            flat ? <CreateTweetIcon color="white" /> : <span>Tweetle</span>
          }
        </ThemeButton>
      </div>
      {/* T w e e t  M o d a l */}
      {
        isOpen && <Modal setIsOpen={setIsOpen} />
      }
      <div className={styles.profileBox}>
          <ProfileBox flat={flat} />
      </div>
    </div>
  )
}

export default SideBar