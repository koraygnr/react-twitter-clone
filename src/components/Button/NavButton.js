import React from 'react'
import styles from "./NavButton.module.scss"
import Button from './Button'
import cn from "classnames"


function NavButton({ to, children, notify, selected, className, ...props }) {
  return (
    <Button
    className={cn(styles.navButton, selected && styles.selected, className )} to={to} {...props}>
        {children}
        {
        notify > 0 &&
        <span className={styles.notify}>{notify}</span>
        }
    </Button>
  )
}

export default NavButton