import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme/themeContext'

/**
 * Функция , которая меняет значок темы при переключении с темной на светлую
 * 
 * @returns {React.ReactElement} jsx-элемент переключателя темы
 */
export const ThemeSwitcher = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    
    return (
        <div onClick={changeTheme} style={{ fontSize: "30px", color: 'purple', cursor: "pointer" }}>
            {theme === "dark" ? '☀' : '☽'}
        </div>
    )
}
