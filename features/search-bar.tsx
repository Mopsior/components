'use client'

import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { sitemap, SitemapDocumentType } from "@/content/sitemap"
import { cn } from "@/lib/utils"
import { getPlatform } from "@/utils/get-platform"
import { FileText, Github, House, MonitorCog, Moon, Sun } from "lucide-react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { ClassNameValue } from "tailwind-merge"

const themeKeywords = ['theme', 'dark', 'light', 'system', 'switch', 'change', 'mode', 'white', 'black', 'auto']

export const SearchBar = ({ className, ...props }: { className?: ClassNameValue }) => {
    const [open, setOpen] = useState(false)
    const [platform, setPlatform] = useState<'mac' | 'windows' | 'other'>('mac')
    const router = useRouter()
    const {setTheme} = useTheme()

    useEffect(() => {
        setPlatform(getPlatform())

        const down = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const run = useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <motion.button className={cn("flex px-4 py-2 text-center justify-between *:content-center border rounded-lg gap-x-4 backdrop-blur shadow-lg bg-secondary/50 dark:bg-secondary/20 transition-all cursor-pointer hover:bg-secondary/70 dark:hover:bg-secondary/50", className)}
                initial={false}
                whileTap={{ scale: 0.95 }} {...props} onClick={() => setOpen(true)}>
                    <span>Search...</span>
                    <kbd className="text-sm rounded-lg border dark:bg-secondary px-2 py-0 font-sans">
                        {platform === 'mac' ? '⌘' : 'Ctrl'} + K
                    </kbd>
            </motion.button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search for article..." />
                <CommandList>
                    <CommandEmpty>No results found</CommandEmpty>
                    <CommandGroup>
                        <CommandItem
                            keywords={['landing']}
                            onSelect={() => {
                                run(() => router.push('/'))
                            }}><House />About</CommandItem>
                        <CommandItem
                            onSelect={() => {
                                run(() => router.push('https://github.com/mopsior/components'))
                            }}><Github />Github Project Repository</CommandItem>
                    </CommandGroup>
                    {Object.entries(sitemap).map(([key, value]) => (
                        <CommandGroup key={key} heading={value.name}>
                            {value.documents.map((doc: SitemapDocumentType, index) => (
                                <CommandItem
                                    keywords={doc.keywords}
                                    key={index}
                                    onSelect={() => {
                                        run(() => router.push(doc.url))
                                    }}
                                ><FileText />{doc.name}</CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                    <CommandGroup heading="Theme">
                        <CommandItem
                            keywords={themeKeywords}
                            onSelect={() => {
                                run(() => setTheme('light'))
                            }}><Sun />Light</CommandItem>
                        <CommandItem
                            keywords={themeKeywords}
                            onSelect={() => {
                                run(() => setTheme('dark'))
                            }}><Moon />Dark</CommandItem>
                        <CommandItem
                            keywords={themeKeywords}
                            onSelect={() => {
                                run(() => setTheme('system'))
                            }}><MonitorCog />System</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}