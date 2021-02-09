import { useState, useEffect } from 'react';
import styles from './index.module.scss';
export const Header = () => {
  const [isOpenDrawer, setDrawerState] = useState(false)
  const [isHamburger, setHamburgerColor] = useState(false)
  const drawerFunction = () => {
    setDrawerState(!isOpenDrawer)
  }
  return (
    <header className={styles.header}>
      <h1>Beauty Salon</h1>
      <div className={`${styles.hamburger} ${isHamburger && styles.gray}`} onClick={() => drawerFunction()}>
        <span className={`${styles.bar1} ${isOpenDrawer && styles.open}`}></span>
        <span className={`${styles.bar2} ${isOpenDrawer && styles.open}`}></span>
        <span className={`${styles.bar3} ${isOpenDrawer && styles.open}`}></span>
      </div>
      <div className={`${styles.drawerMenu} ${isOpenDrawer && styles.open}`} onClick={() => setDrawerState(!isOpenDrawer)}>
        <h2>Site Menu</h2>
        <ul>
          <li><span>INTRODUCTION</span></li>
          <li><span>MENUS</span></li>
          <li><span>STAFF</span></li>
          <li><span>ACCESS</span></li>
          <li><span>CONTACT</span></li>
        </ul>
        <p onClick={() => drawerFunction()}><u>閉じる</u></p>
      </div>
    </header>
  )
}
