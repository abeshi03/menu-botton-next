import { useState} from 'react';
import styles from './index.module.scss';
export const Header = () => {
  const [isOpenDrawer, setDrawerState] = useState(false)
  const drawerFunction = () => {
    setDrawerState(!isOpenDrawer)
  }
  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={() => drawerFunction()}>
        <span className={`${styles.bar1} ${isOpenDrawer && styles.open}`}></span>
        <span className={`${styles.bar2} ${isOpenDrawer && styles.open}`}></span>
        <p className={`${styles.bar3} ${isOpenDrawer && styles.open}`}>Menu</p>
      </div>
      <div className={`${styles.drawerMenu} ${isOpenDrawer && styles.open}`} onClick={() => setDrawerState(!isOpenDrawer)}>
        <div>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><span>メニュー１</span></li>
          <li><span>メニュー２</span></li>
          <li><span>メニュー３</span></li>
          <li><span>メニュー４</span></li>
          <li><span>メニュー５</span></li>
        </ul>
      </div>
    </header>
  )
}
