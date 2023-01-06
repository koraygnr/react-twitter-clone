import React from 'react'
import styles from "./Search.module.scss"
import { SearchIcon } from '../Icons'

function Search() {
  return (
    <div className={styles.searchBox}>
        <label>
        <SearchIcon />
        <input
            type="text"
            placeholder="Twitter'da Ara"
        />
        </label>
    </div>
  )
}

export default Search