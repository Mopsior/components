import { SitemapDocument } from "@/content/sitemap"
import { cn } from "@/lib/utils"

export const Badge = ({ type }: { type: SitemapDocument['badge'] }) => {
    return (
        <span className={cn('px-2 rounded-full text-sm flex text-center items-center justify-center', {
            'dark:border-blue-800 dark:border-2 dark:bg-background dark:text-muted-foreground bg-blue-600/80 text-white': type === 'beta',
            'bg-accent': type === 'not-ready',
        })}>
            {type === 'beta' && 'Beta'}
            {type === 'not-ready' && 'Not ready'}
        </span>
    )
}