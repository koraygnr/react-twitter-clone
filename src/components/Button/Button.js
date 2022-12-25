import React from 'react'
import styles from "./Button.module.scss"
import cn from "classnames"

function Button({children, className, full, ...props}) {
  return (
    <button 
    type='button' 
    className={cn(styles.button, className, full && styles.full)} {...props}>
        {children}
    </button>
  )
}

export default Button