import React from 'react'
import styles from "./Navigation.module.scss"
import NavButton from '../Button/NavButton'
import menuItems from '../../constants/menuItems'
import { useLocation } from 'react-router-dom'

function Navigation({flat = false}) {

    let location = useLocation().pathname

  return (
    <nav className={styles.navbar}>
        {
           menuItems.map( (item, i) => (
            <NavButton 
                key={i}
                notify={item.notify}
                selected={location === item.path}
                to={item.path === "/twitter" || item.key === "/home"  ? "" : item.path }
                className={styles.navButton}
            >
                { location === item.path 
                    ? item.iconSelected 
                    : item.icon
                }
                {
                    item.title.length > 0 && !flat &&
                    <span>{item.title}</span>
                } 
            </NavButton>
           )) 
        }
    </nav>
  )
}

export default Navigation