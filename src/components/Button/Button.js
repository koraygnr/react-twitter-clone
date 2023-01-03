import React from 'react'
import styles from "./Button.module.scss"
import { Link, NavLink } from "react-router-dom"
import cn from "classnames"

function LinkButton({ to, children, ...props }) {
  return (
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button 
    type='button' 
    {...props}
    >
        {children}
    </button>
  )
}

function Button({ children, className, full, ...props }) {
  const Comp = props.to ? LinkButton : BaseButton
  return (
    <Comp 
    type='button' 
    className={cn(styles.button, className, full && styles.full)} {...props} >
      {children}
    </Comp>
  )
}

export default Button