'use client'

import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { ThemeSwitch } from "./theme-switch"

export const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <>
            <nav className="flex fixed top-5 left-1/2 transform -translate-x-1/2 text-primary bg-secondary rounded-lg text-center justify-center border gap-x-1 p-1 *:rounded-lg *:px-6 *:py-2 text-sans shadow-sm invisible md:visible">
                <p className="font-mono font-semibold">mopsior/components</p>
                <NavButtons href="/components" selected={pathname.startsWith('/components')}>
                    Components
                </NavButtons>
                <NavButtons href="/" selected={pathname === '/'}>
                    About
                </NavButtons>
            </nav>
            <nav className="fixed grid grid-cols-2 top-5 right-5 bg-secondary rounded-lg text-center justify-center border p-1 gap-x-2 shadow-sm invisible md:visible">
                <Link href={'https://github.com/mopsior'}>
                    <RightButtons>
                        <Github />
                    </RightButtons>
                </Link>
                <RightButtons>
                    <ThemeSwitch />
                </RightButtons>
            </nav>
        </>
    )
}

const NavButtons = ({ href, children, selected }: { href: string, children: ReactNode, selected?: boolean }) => {
    return (
        <Link href={href} className={cn('transition-all duration-150', {
            'bg-background shadow-sm hover:cursor-default': selected,
            'text-foreground opacity-50 hover:text-primary hover:opacity-100': !selected
        })}>
            {children}
        </Link>
    )
}

const RightButtons = ({ children }: { children: ReactNode }) => {
    return (
        <div className="p-2 hover:bg-background hover:shadow-sm rounded-lg transition-all duration-300">
            {children}
        </div>
    )
}