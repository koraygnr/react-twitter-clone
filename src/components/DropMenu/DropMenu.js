import React from 'react'
import styles from "./DropMenu.module.scss"
import cn from "classnames"
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../redux/theme/themeSlice'


function DropMenu({ childiren, className, isOpen, setIsOpen, ...props }) {

    const dispatch = useDispatch()
    const themes = useSelector(state => state.theme.themes)
    const selectedTheme = useSelector(state => state.theme.selectedTheme)

    function openDropMenu(e) {
        dispatch(changeTheme(e.target.value))
        setIsOpen(!isOpen)
    }

    return (
        <div className={cn(styles.dropMenu, className)} {...props}>
            <div className={styles.content} >
                {
                    themes.map((item, i) => (
                        <div
                            key={i}
                        >
                            <label key={item} className={styles.label}>
                                <input
                                    type="radio"
                                    value={item}
                                    name="theme"
                                    id={item}
                                    checked={item === selectedTheme}
                                    onChange={openDropMenu}
                                />
                                {item}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DropMenu