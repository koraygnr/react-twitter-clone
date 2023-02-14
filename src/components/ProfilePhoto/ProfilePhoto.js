import React from 'react'
import styles from "./ProfilePhoto.module.scss"
import cn from "classnames"
import koraypp from "../../assets/koraygunerpp.jpg"

const initialSrc = koraypp

function ProfilePhoto({ src = initialSrc, alt, size = 47 }) {
  return (
    <div className={cn(styles.photo)} style={{width:size, height:size}}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default ProfilePhoto