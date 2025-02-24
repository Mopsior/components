'use client'

import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { ThemeSwitch } from "./theme-switch"
import { motion } from "motion/react"
import { firstComponentURL } from "@/utils/first-component-url"
import { SearchBar } from "./search-bar"
import { ClassNameValue } from "tailwind-merge"

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <>
            <nav className="flex fixed top-5 left-1/2 transform -translate-x-1/2 text-primary bg-secondary rounded-lg text-center justify-center border gap-x-1 p-1 *:rounded-lg *:px-6 *:py-2 text-sans shadow-lg invisible md:visible z-50">
                <p className="font-mono font-semibold">mopsior/components</p>
                <Tabs href={firstComponentURL} selected={pathname.startsWith('/components')}>
                    Components
                </Tabs>
                <Tabs href="/" selected={pathname === '/'}>
                    About
                </Tabs>
            </nav>
            <div className="fixed top-5 right-5 flex gap-x-2 z-50">
                <SearchBar className='hidden md:flex' />
                <nav className="grid grid-cols-2 bg-secondary rounded-lg text-center justify-center border p-1 gap-x-2 shadow-md invisible md:visible text-primary z-50">
                    <Link href={'https://github.com/mopsior'}>
                        <RightButtons>
                            <Github />
                        </RightButtons>
                    </Link>
                    <ThemeSwitch />
                </nav>
            </div>
        </>
    )
}

const Tabs = ({ href, children, selected }: { href: string, children: ReactNode, selected?: boolean }) => {
    return (
        <Link href={href} className={cn('transition-all duration-150 relative', {
            'text-primary': selected,
            'text-muted-foreground hover:text-primary': !selected
        })}>
            {children}
            {selected && <motion.span
                layoutId="tabs"
                transition={{ type: "spring", duration: 0.5 }}
                className="absolute inset-0 -z-10 bg-background shadow-md rounded-lg hover:cursor-default"
            ></motion.span>}
        </Link>
    )
}

export const RightButtons = ({ children, className }: { children: ReactNode, className?: ClassNameValue }) => {
    return (
        <div className={cn("p-2 hover:bg-background hover:shadow-lg rounded-lg transition-all duration-300", className)}>
            {children}
        </div>
    )
}