import React from 'react'
import styles from "./NavButton.module.scss"
import Button from './Button'
import cn from "classnames"


function NavButton({children, notify, active, ...props}) {
  return (
    <Button
    className={cn(styles.navButton, active && styles.active)} {...props}>
        {children}
        {
        notify > 0 &&
        <span className={styles.notify}>{notify}</span>
        }
    </Button>
  )
}

export default NavButton