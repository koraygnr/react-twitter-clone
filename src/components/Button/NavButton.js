import React from 'react'
import styles from "./NavButton.module.scss"
import Button from './Button'
import cn from "classnames"


function NavButton({children, notify, selected, ...props}) {
  return (
    <Button
    className={cn(styles.navButton, selected && styles.selected)} {...props}>
        {children}
        {
        notify > 0 &&
        <span className={styles.notify}>{notify}</span>
        }
    </Button>
  )
}

export default NavButton