'use client'

import { LoaderCircle, MonitorCog, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { MotionMonitorCog, MotionMoon, MotionSun } from "@/lib/motion-components"

const switchAnimation = {
    initial: { y: 20},
    exit: { y: -20},
    animate: { y: 0}
}

export const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <LoaderCircle className="animate-spin" />
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
        <Tooltip>
            <TooltipTrigger asChild>
                <div onClick={() => { handleThemeChange() }} className="cursor-pointer overflow-hidden">
                    <AnimatePresence>
                        { theme === 'dark' && <MotionMoon initial='initial' exit='exit' animate='animate' variants={switchAnimation}  />}
                        { theme === 'light' && <MotionSun initial='initial' exit='exit' animate='animate' variants={switchAnimation} />}
                        { theme == 'system' && <MotionMonitorCog initial='initial' exit='exit' animate='animate' variants={switchAnimation} />}
                    </AnimatePresence>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>Change theme</p>
                <span className="text-sm text-muted-foreground">({theme})</span>
            </TooltipContent>
        </Tooltip>
    )
}