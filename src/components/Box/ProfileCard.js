import React from 'react'
import Button from '../Button/Button'
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto'
import styles from "./ProfileCard.module.scss"

function ProfileCard({ name = "Koray Güner", slug = "korayguner", img, url}) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={styles.profileCard}>
            <div className={styles.leftSide}>
                <div className={styles.profilePhoto}>
                    <ProfilePhoto src={img} />
                </div>
                <div className={styles.body}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.slug}>@{slug}</p>
                </div>
            </div>
            <div className={styles.rightSide}>
              <Button>Takip et</Button>
            </div>
        </div>
        </a>
    )
}

export default ProfileCard