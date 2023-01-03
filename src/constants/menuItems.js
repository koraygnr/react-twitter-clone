import React from 'react'
import { TwitterIcon, HomeIconFilled, HomeIconOutlined, SearchIcon, SearchIconBold, ExploreIconFilled, ExploreIconOutlined, NotificationsIconFilled, NotificationsIconOutlined, MessagesIconFilled, MessagesIconOutlined, BookmarkIconOutlined, BookmarkIconFilled, ListIconOutlined, ListIconFilled, ProfileIconOutlined, ProfileIconFilled, MoreIconOutlined, CreateTweetIcon } from "../components/Icons"

const menuItems = [
    {
        path: "/",
        icon: <TwitterIcon />,
        iconSelected: <TwitterIcon />,
        title: "",
        notify: 0
    },
    {
        path: "/",
        icon: <HomeIconOutlined />,
        iconSelected: <HomeIconFilled />,
        title: "Anasayfa",
        notify: 0
    },
    {
        path: "/explore",
        icon: <ExploreIconOutlined />,
        iconSelected: <ExploreIconFilled />,
        title: "Keşfet",
        notify: 0
    },
    {
        path: "/notifications",
        icon: <NotificationsIconOutlined />,
        iconSelected: <NotificationsIconFilled />,
        title: "Bildirimler",
        notify: 0
    },
    {
        path: "/messages",
        icon: <MessagesIconOutlined />,
        iconSelected: <MessagesIconFilled />,
        title: "Mesajlar",
        notify: 5
    },
    {
        path: "/bookmarks",
        icon: <BookmarkIconOutlined />,
        iconSelected: <BookmarkIconFilled />,
        title: "Yer İşaretleri",
        notify: 0
    },
    {
        path: "/lists",
        icon: <ListIconOutlined />,
        iconSelected: <ListIconFilled />,
        title: "Listeler",
        notify: 0
    },
    {
        path: "/profile",
        icon: <ProfileIconOutlined />,
        iconSelected: <ProfileIconFilled />,
        title: "Profil",
        notify: 0
    },
    {
        path: "/more",
        icon: <MoreIconOutlined />,
        iconSelected: <MoreIconOutlined />,
        title: "Daha fazla",
        notify: 0
    }
]

export default menuItems