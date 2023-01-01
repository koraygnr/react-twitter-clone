import React from 'react'
import styles from "./ProfilePhoto.module.scss"
import cn from "classnames"

const initialSrc = "https://pbs.twimg.com/profile_images/1598240171006255105/famISA6X_400x400.jpg"

function ProfilePhoto({ src = initialSrc, alt, size = 47 }) {
  return (
    <div className={cn(styles.photo)} style={{width:size, height:size}}>
        <img src={src} alt={alt} />
    </div>
  )
}

export default ProfilePhoto