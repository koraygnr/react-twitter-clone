import React from 'react'
import styles from "./More.module.scss"
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../redux/theme/themeSlice'

function More() {
  const dispatch = useDispatch()
  const themes = useSelector( state => state.theme.themes)
  const selectedTheme = useSelector( state => state.theme.selectedTheme)


  return (
    <div className={styles.more}>
      {
        themes.map( item => (
          <label key={item} className={styles.label}>
            <input 
            type="radio" 
            value={item} 
            name="theme" 
            id={item}
            checked={ item === selectedTheme }
            onChange={(e) => dispatch(changeTheme(e.target.value))}
          />
          {item}
          </label>
        ))
      }
    </div>
  )
}

export default More