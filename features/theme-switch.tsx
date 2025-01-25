'use client'

import { MonitorCog, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleThemeChange = () => {
        switch (theme) {
            case 'light':
                setTheme('dark')
                break
            case 'dark':
                setTheme('system')
                break
            case 'system':
                setTheme('light')
                break
            default:
                setTheme('system')
        }
    }
    
    return (
        <div onClick={() => { handleThemeChange() }} className="cursor-pointer">
        { theme === 'dark' && <Moon />}
        { theme === 'light' && <Sun />}
        { theme == 'system' && <MonitorCog />}
        </div>
    )
}