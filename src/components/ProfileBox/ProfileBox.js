import React from 'react'
import styles from "./ProfileBox.module.scss"
import cn from "classnames"
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import Button from '../Button/Button'
import { More2Icon } from "../Icons"


function ProfileBox({ name = "Koray Güner", slug = "korayguner" }) {
  return (
    <Button className={cn(styles.box)}>
        <div className={styles.ProfilePhoto}>
            <ProfilePhoto />
        </div>
        <div className={styles.body}>
            <p className={styles.name}>{name}</p>    
            <p className={styles.slug}>@{slug}</p>
        </div>
        <div className={styles.icon}>
            <More2Icon color="white"/>
        </div>
    </Button>
  )
}

export default ProfileBox