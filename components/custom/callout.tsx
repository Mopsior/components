import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { ClassNameValue } from "tailwind-merge";

const calloutColors = {
    tip: 'bg-green-600/15 border-green-500',
    info: 'bg-blue-600/15 border-blue-500',
    warning: 'bg-yellow-600/15 border-yellow-500',
    important: 'bg-red-600/15 border-red-500',
}

const bgColors = {
    tip: 'bg-green-500/75',
    info: 'bg-blue-500/75',
    warning: 'bg-yellow-500/75',
    important: 'bg-red-500/75',
}

type VariantType = 'tip' | 'info' | 'warning' | 'important'

export const Callout = ({ children, rounded = 'md', shadow = true, variant = 'info', className, ...props }: { children: ReactNode, rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full', shadow?: boolean, variant?: VariantType, className?: ClassNameValue }) => {
    return (
        <div className={cn("py-3 px-4 border w-full my-4 flex flex-nowrap gap-x-4", {
            'rounded-sm': rounded === 'sm',
            'rounded-md': rounded === 'md',
            'rounded-lg': rounded === 'lg',
            'rounded-xl': rounded === 'xl',
            'rounded-full': rounded === 'full',
            'shadow-md': shadow,
            [calloutColors[variant]]: variant,
        }, 
            className
        )} {...props}>
            {children}
        </div>
    )
}

export const CalloutIcon = ({ children, variant = 'info', highlight = false, className, ...props }: { children: ReactNode, variant?: VariantType, highlight?: boolean, className?: ClassNameValue }) => {
    return (
        <div className={cn("w-fit min-w-4 max-w-8 h-full flex justify-center text-xl rounded-md p-1", {
            [bgColors[variant]]: highlight,
            className
})} {...props}>
            {children}
        </div>
    )
}

export const CalloutContent = ({ children }: { children: ReactNode }) => {
    return (
        <div className={"w-full"}>{children}</div>
    )
}