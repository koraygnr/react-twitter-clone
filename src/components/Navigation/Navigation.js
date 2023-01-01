import React from 'react'
import styles from "./Navigation.module.scss"
import NavButton from '../Button/NavButton'
import Button from '../Button/Button'
import ThemeButton from '../Button/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import { TwitterIcon, HomeIconFilled, HomeIconOutlined, SearchIcon, SearchIconBold, ExploreIconFilled, ExploreIconOutlined, NotificationsIconFilled, NotificationsIconOutlined, MessagesIconFilled, MessagesIconOutlined, BookmarkIconOutlined, ListIconOutlined, ListIconFilled, ProfileIconOutlined, ProfileIconFilled, MoreIconOutlined, CreateTweetIcon } from "../Icons"

const menuItems = [
    {
        key: "twitter",
        icon: <TwitterIcon />,
        title: "",
        notify: 0
    },
    {
        key: "home",
        icon: <HomeIconOutlined />,
        title: "Anasayfa",
        notify: 0
    },
    {
        key: "Keşfet",
        icon: <ExploreIconOutlined />,
        title: "Keşfet",
        notify: 0
    },
    {
        key: "Bildirimler",
        icon: <NotificationsIconOutlined />,
        title: "Bildirimler",
        notify: 0
    },
    {
        key: "Mesajlar",
        icon: <MessagesIconOutlined />,
        title: "Mesajlar",
        notify: 5
    },
    {
        key: "Yer İşaretleri",
        icon: <BookmarkIconOutlined />,
        title: "Yer İşaretleri",
        notify: 0
    },
    {
        key: "Listeler",
        icon: <ListIconOutlined />,
        title: "Listeler",
        notify: 0
    },
    {
        key: "Profil",
        icon: <ProfileIconOutlined />,
        title: "Profil",
        notify: 0
    },
    {
        key: "Daha fazla",
        icon: <MoreIconOutlined />,
        title: "Daha fazla",
        notify: 0
    }
]

function Navigation({flat = false}) {
  return (
    <nav className={styles.navbar}>
        {
           menuItems.map( item => (
            <NavButton 
                key={item.key}
                notify={item.notify}
            >
                {item.icon}
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