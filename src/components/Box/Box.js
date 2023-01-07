import React from 'react'
import styles from "./Box.module.scss"
import ProfileCard from './ProfileCard'
import whoToFollow from "../../constants/whoToFollow"

function Box() {
  return (
    <div className={styles.box}>
        <header className={styles.header}>
            <h2>Kimi takip etmeli</h2>
        </header>
        <div className={styles.content}>
            {
                whoToFollow.map( (item, i) => (
                    <ProfileCard 
                        key={i}
                        name={item.name} 
                        slug={item.slug} 
                        img={item.img}
                        url={item.url}
                    />
                ))
            }
        </div>
        <footer className={styles.footer}>
            <p>Daha fazla göster</p>
        </footer>
    </div>
  )
}

export default Box