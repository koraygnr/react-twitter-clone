import React from 'react'
import styles from "./Navigation.module.scss"
import NavButton from '../Button/NavButton'
import menuItems from '../../constants/menuItems'

function Navigation({flat = false, selectedKey = "home"}) {
  return (
    <nav className={styles.navbar}>
        {
           menuItems.map( item => (
            <NavButton 
                key={item.key}
                notify={item.notify}
                selected={selectedKey === item.key}
            >
                { selectedKey === item.key 
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