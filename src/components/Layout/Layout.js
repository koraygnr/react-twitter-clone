import React from 'react'
import styles from "./Layout.module.scss"
import useWindowSize from "../../hooks/useWindowSize"
import breakPoints from '../../constants/breakPoints';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import Extra from '../Extra/Extra';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


function Layout() {
  const size = useWindowSize();
  return (
    <div className={styles.layout}>
      <SideBar flat={size.width < breakPoints.desktop_size}/>
      <Main>
        <Header />
        <Outlet />
      </Main>
      {
        size.width > breakPoints.tablet_size && <Extra/>
      }
    </div>
  )
}

export default Layout