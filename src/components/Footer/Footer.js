import React from 'react'
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <div className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Hizmet Şartları</span></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Gizlilik Politikası</span></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Çerez Politikası</span></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Imprint</span></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Erişebilirlik</span></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Reklam Bilgisi</span></a>
        <a href="/" target="_blank" rel="noopener noreferrer"><span>Daha fazla</span></a>
        <p>© 2023 Twitter, Inc.</p>
    </div>
  )
}

export default Footer