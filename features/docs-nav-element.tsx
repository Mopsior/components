'use client'

import { SitemapDocument } from "@/content/sitemap"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Badge } from "./badge"

export const NavElement = ({ name, url, badge }: { name: string, url: string, badge?: SitemapDocument['badge'] }) => {
    const pathname = usePathname()

    return (
        <Link href={url} className="relative">
            {pathname === url && <motion.div initial={{ height: 8 }} animate={{ height: 25 }} transition={{ duration: 0.05 }} className="w-1 h-1 bg-primary -left-4 top-1/2 -translate-y-1/2 absolute rounded-lg transition-all" />}
            <div className={cn("px-4 py-1 w-full rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary truncate transition-all flex gap-x-2", 
                pathname === url && "text-primary bg-secondary"
            )}>
                <p>{name}</p>
                {badge && <Badge type={badge} />}
            </div>
        </Link>
    )
}