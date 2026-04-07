import { useState, useEffect } from 'react';

export function useSwitchTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove('dark', 'light')
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const switchTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
    }
    return { theme, switchTheme }
}