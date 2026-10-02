import React, { useContext } from 'react'
import { Logo } from '../Logo/Logo';
import styles from "./Header.module.css"
import { Menu } from '../Menu/Menu';
import { CustomComponent } from '../CustomComponent/CustomComponent';
import { TranslationContext } from '../../context/translation/translationContext';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Header = ({ changeLang, lang }) => {
  const translation = useContext(TranslationContext);
  
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div>
          <button onClick={changeLang}>{lang}</button>
          <ThemeSwitcher />
        </div>
        <Logo />
        <h1 className= {styles.title}>{translation.siteName}</h1>
        <img className= {styles.img} src='/images.png' alt='user icon' />
      </div>
      
      <Menu />
      <CustomComponent />
    </header>
  );
  
}

