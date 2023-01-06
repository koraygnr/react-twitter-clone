import React from 'react'
import styles from "./Header.module.scss"
import { useLocation } from 'react-router-dom'
import { PopularIcon } from '../Icons'
import IconButton from '../Button/IconButton'

function Header() {
    const location = useLocation().pathname
    const title = location.charAt(1).toUpperCase() + location.slice(2)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>{title ? title : "Home"}</h2>
                </div>
                <div className={styles.icon}>
                    <IconButton className={styles.iconButton}>
                        <PopularIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header