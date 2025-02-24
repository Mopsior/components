'use client'

import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { sitemap } from "@/content/sitemap"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { Github, Menu } from "lucide-react"
import Link from "next/link"
import { ThemeSwitch } from "./theme-switch"
import { Suspense, useState } from "react"
import { usePathname } from "next/navigation"

const NavigationLinks = ({ onClose }: { onClose: () => void }) => {
    const pathname = usePathname()

    return (
        <>
            {Object.entries(sitemap).map(([key, value]) => (
                <div className="mt-6 text-left items-start w-full flex flex-col gap-y-2" key={key}>
                    <h4 className="font-semibold mt-2">{value.name}</h4>
                    {value.documents.map((doc, index) => (
                        <Link
                            href={doc.url}
                            key={index}
                            className={cn('text-foreground cursor-pointer',
                                pathname === doc.url && 'border-b-2 border-primary'
                            )}
                            onClick={onClose}
                        >
                            {doc.name}
                        </Link>
                    ))}
                </div>
            ))}
        </>
    )
}

const LinksSkeleton = () => (
    <div className="w-full animate-pulse pb-2">
        {[1, 2].map((section) => (
            <div key={section} className="mt-6">
                <div className="h-5 bg-muted rounded w-28 mb-4" />
                {[1, 2].map((item) => (
                    <div key={item} className="h-4 bg-muted rounded w-48 mb-3" />
                ))}
            </div>
        ))}
    </div>
)

export const DocsDrawer = () => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    if (!isDesktop) {
        return (
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <div className="fixed bottom-5 right-5 p-2 bg-background rounded-lg shadow-md border-border border cursor-pointer z-50 visible lg:invisible">
                        <Menu size={40} />
                    </div>
                </DrawerTrigger>
                <DrawerContent className="text-center items-center mb-8 px-8">
                    <DrawerTitle className="font-mono mt-5 px-4 py-2 bg-secondary w-fit rounded-sm">
                        mopsior/components
                    </DrawerTitle>
                    <div className="flex gap-x-4 absolute bottom-0 right-5 py-1">
                        <div className="p-2 border rounded-lg shadow-sm bg-background">
                            <Github />
                        </div>
                        <div className="p-2 border rounded-lg shadow-sm bg-background">
                            <ThemeSwitch />
                        </div>
                    </div>
                    <Suspense fallback={<LinksSkeleton />}>
                        <NavigationLinks onClose={() => setOpen(false)} />
                    </Suspense>
                </DrawerContent>
            </Drawer>
        )
    }

    return <></>
}