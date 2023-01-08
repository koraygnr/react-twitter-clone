import React, { useState } from 'react'
import styles from "./Navigation.module.scss"
import NavButton from '../Button/NavButton'
import menuItems from '../../constants/menuItems'
import { useLocation } from 'react-router-dom'
import cn from "classnames"
import DropMenu from '../DropMenu/DropMenu'

function Navigation({ flat = false }) {

    const location = useLocation().pathname
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={cn(styles.navbar, flat && styles.flat)}>
            {
                menuItems.map((item, i) => (

                    item.key === "more" ?
                        <NavButton
                            key={i}
                            notify={item.notify}
                            selected={location === item.path}
                            className={cn(styles.navButton, item.key)}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {location === item.path
                                ? item.iconSelected
                                : item.icon
                            }
                            {
                                item.title.length > 0 && !flat &&
                                <span>{item.title}</span>
                            }
                        </NavButton>
                        :
                        <NavButton
                            key={i}
                            notify={item.notify}
                            selected={location === item.path}
                            to={item.path}
                            className={cn(styles.navButton, item.key)}
                        >
                            {location === item.path
                                ? item.iconSelected
                                : item.icon
                            }
                            {
                                item.title.length > 0 && !flat &&
                                <span>{item.title}</span>
                            }
                        </NavButton >
                ))
            }
            {
                isOpen && <DropMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            }
        </nav>
    )
}

export default Navigation