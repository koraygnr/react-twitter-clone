import React from 'react'
import styles from "./Navigation.module.scss"
import NavButton from '../Button/NavButton'
import Button from '../Button/Button'
import ThemeButton from '../Button/ThemeButton'
import ProfileBox from '../ProfileBox/ProfileBox'
import { TwitterIcon, HomeIconFilled, HomeIconOutlined, SearchIcon, SearchIconBold, ExploreIconFilled, ExploreIconOutlined, NotificationsIconFilled, NotificationsIconOutlined, MessagesIconFilled, MessagesIconOutlined, BookmarkIconOutlined, BookmarkIconFilled, ListIconOutlined, ListIconFilled, ProfileIconOutlined, ProfileIconFilled, MoreIconOutlined, CreateTweetIcon } from "../Icons"

const menuItems = [
    {
        key: "twitter",
        icon: <TwitterIcon />,
        iconSelected: <TwitterIcon />,
        title: "",
        notify: 0
    },
    {
        key: "home",
        icon: <HomeIconOutlined />,
        iconSelected: <HomeIconFilled />,
        title: "Anasayfa",
        notify: 0
    },
    {
        key: "explore",
        icon: <ExploreIconOutlined />,
        iconSelected: <ExploreIconFilled />,
        title: "Keşfet",
        notify: 0
    },
    {
        key: "notification",
        icon: <NotificationsIconOutlined />,
        iconSelected: <NotificationsIconFilled />,
        title: "Bildirimler",
        notify: 0
    },
    {
        key: "messages",
        icon: <MessagesIconOutlined />,
        iconSelected: <MessagesIconFilled />,
        title: "Mesajlar",
        notify: 5
    },
    {
        key: "bookmark",
        icon: <BookmarkIconOutlined />,
        iconSelected: <BookmarkIconFilled />,
        title: "Yer İşaretleri",
        notify: 0
    },
    {
        key: "list",
        icon: <ListIconOutlined />,
        iconSelected: <ListIconFilled />,
        title: "Listeler",
        notify: 0
    },
    {
        key: "profile",
        icon: <ProfileIconOutlined />,
        iconSelected: <ProfileIconFilled />,
        title: "Profil",
        notify: 0
    },
    {
        key: "more",
        icon: <MoreIconOutlined />,
        iconSelected: <MoreIconOutlined />,
        title: "Daha fazla",
        notify: 0
    }
]

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