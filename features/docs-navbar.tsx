'use client'

import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { sitemap } from "@/content/sitemap"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { Github, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeSwitch } from "./theme-switch"
import { useState } from "react"

export const DocsNavbar = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const isDesktop = useMediaQuery('(min-width: 1024px)')

    if (!isDesktop) {
        return (
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <div className="fixed bottom-5 right-5 p-2 bg-background rounded-lg shadow-md border-border border cursor-pointer z-50">
                        <Menu size={40} />
                    </div>
                </DrawerTrigger>
                <DrawerContent className="text-center items-center mb-8 px-8 ">
                    <DrawerTitle className="font-mono mt-5 px-4 py-2 bg-secondary w-fit rounded-sm">mopsior/components</DrawerTitle>
                    <div className="flex gap-x-4 absolute bottom-0 right-5 py-1">
                        <div className="p-2 border rounded-lg shadow-sm bg-background">
                            <Github/>
                        </div>
                        <div className="p-2 border rounded-lg shadow-sm bg-background">
                            <ThemeSwitch />
                        </div>
                    </div>
                    {Object.entries(sitemap).map(([key, value]) => (
                        <div className="mt-6 text-left items-start w-full flex flex-col gap-y-2" key={key}>
                            <h4 className="font-semibold mt-2">{value.name}</h4>
                            {value.documents.map((doc, index) => (
                                <Link href={doc.url} key={index} className={cn('text-foreground cursor-pointer', pathname === doc.url && 'border-b-2 border-primary')} onClick={() => { setOpen(false) }}>{doc.name}</Link>
                            ))}
                        </div>
                    ))}
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <aside className="bg-background border rounded-tr-lg rounded-br-lg shadow-lg py-6 gap-y-6 flex flex-col overflow-y-auto sticky left-0 top-24 min-w-64 max-w-96 h-fit">
            {Object.entries(sitemap).map(([key, value]) => (
                <div key={key}>
                    <div className="flex flex-col text-base gap-y-1 px-8">
                        <h3 className="leading-7 font-bold px-4 text-primary">{value.name}</h3>
                        {value.documents.map((doc, index) => (
                            <NavElement name={doc.name} url={doc.url} key={index} selected={pathname === doc.url} />
                        ))}
                    </div>
                    <Separator className="visible last:hidden"/>
                </div>
            ))}
        </aside>
    )
}

const NavElement = ({ name, url, selected }: { name: string, url: string, selected?: boolean }) => {
    return (
        <Link href={url}>
            <div className={cn("px-4 py-1 w-full rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary truncate transition-all", 
                selected && "text-primary bg-secondary before:h-5 before:w-1 before:bg-primary before:absolute before:left-4 before:mt-[2px] before:rounded-lg before:transition-all"
            )}>
                <p>{name}</p>
            </div>
        </Link>
    )
}