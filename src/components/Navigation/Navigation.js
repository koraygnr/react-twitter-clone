import React from 'react'
import styles from "./Navigation.module.scss"
import NavButton from '../Button/NavButton'
import Button from '../Button/Button'
import ThemeButton from '../Button/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import { TwitterIcon, HomeIconFilled, HomeIconOutlined, SearchIcon, SearchIconBold, ExploreIconFilled, ExploreIconOutlined, NotificationsIconFilled, NotificationsIconOutlined, MessagesIconFilled, MessagesIconOutlined, BookmarkIconOutlined, ListIconOutlined, ListIconFilled, ProfileIconOutlined, ProfileIconFilled, MoreIconOutlined } from "../Icons"


function Navigation() {
  return (
    <nav className={styles.navbar}>
        <NavButton>
            <TwitterIcon />
        </NavButton>
        <NavButton active="active" >
            <HomeIconFilled /> <span>Anasayfa</span>
        </NavButton>
        <NavButton >
            <ExploreIconOutlined /><span>Keşfet</span>
        </NavButton>
        <NavButton notify={6}>
            <NotificationsIconFilled /><span>Bildirimler</span>
        </NavButton>
        <NavButton>
            <MessagesIconFilled /><span>Mesajlar</span>
        </NavButton>
        <NavButton>
            <BookmarkIconOutlined /><span>Yer İşaretleri</span>
        </NavButton>
        <NavButton>
            <ListIconOutlined /><span>Listeler</span>
        </NavButton>
        <NavButton>
            <ProfileIconOutlined /><span>Profil</span>
        </NavButton>
        <NavButton>
            <MoreIconOutlined /><span>Daha fazla</span>
        </NavButton>
        <ThemeButton full>
            <span>Tweetle</span>
        </ThemeButton>
        <div className={styles.profileBox}>
            <ProfileBox />
        </div>
    </nav>

  )
}

export default Navigation