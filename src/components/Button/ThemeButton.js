import React from 'react'
import styles from "./ThemeButton.module.scss"
import Button from './Button'
import cn from "classnames"


function ThemeButton({children, className, ...props}) {
  return (
    <Button
    className={cn(styles.themeButton, className)} {...props}
    >
    {children}
    </Button>
  )
}

export default ThemeButton