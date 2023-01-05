import React from 'react'
import cn from "classnames"
import Button from './Button'
import styles from "./IconButton.module.scss"

function IconButton({ children, className, ...props}) {
  return (
    <Button
        className={cn(styles.iconButton, className)} {...props}
    >
        {children}
    </Button>
  )
}

export default IconButton