'use client'
import { ReactNode, useState } from "react"
import { motion } from "motion/react"
import { Copy, SquareArrowOutUpRight, Trash2 } from "lucide-react"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"

export const DeleteButtonLayout = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border rounded-lg flex flex-col gap-2 bg-background shadow-md w-fit">
            <div className="p-2 flex flex-col gap-2 border-b">
                <OptionButton><SquareArrowOutUpRight />Open in new window</OptionButton>
                <OptionButton><Copy />Copy content</OptionButton>
            </div>
            <div className="px-2 pb-2 flex flex-col overflow-clip relative">
                <motion.button
                    initial={{ y: 0 }}
                    animate={{ y: isOpen ? -64 : 0 }}
                    onClick={() => setIsOpen(!isOpen)}
                    transition={{ duration: 0.2 }}
                    className="text-left transition-all px-4 py-2 rounded-lg text-red-500 hover:bg-red-100 dark:hover:bg-red-950/40 flex gap-x-4">
                    <Trash2 className="mt-[-1px]" /> Delete
                </motion.button>
                <motion.div
                    initial={{ y: !isOpen ? 64 : 0 }}
                    animate={{ y: isOpen ? 0 : 64 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="absolute w-full h-full left-0 right-0 bg-background px-2 pb-2 grid grid-cols-2 gap-x-2 rounded-lg">
                        <OptionButton className="justify-center bg-red-500 text-white hover:bg-red-700">Delete</OptionButton>
                        <OptionButton className="justify-center"
                            onClick={() => setIsOpen(!isOpen)}>
                            Cancel
                        </OptionButton>
                </motion.div>
            </div>
        </div>
    )
}

const OptionButton = ({ children, className, onClick, ...props }: { children: ReactNode, className?: ClassNameValue, onClick?: () => void }) => {
    return (
        <button className={cn("text-left hover:bg-secondary transition-all px-4 py-2 rounded-lg flex gap-x-4", className)} {...props} onClick={onClick}>{children}</button>
    )
}