import { cn } from "@/lib/utils"
import { span as MotionSpan } from "motion/react-client"
import { ReactNode } from "react"
import { ClassNameValue } from "tailwind-merge"

export const Tabs = ({ children, className, shadow = true, size = 'default', ...props }: { children: ReactNode, className?: ClassNameValue, shadow?: boolean, size?: 'default' | 'sm' }) => {
    return (
        <div className={cn("flex text-primary bg-secondary rounded-lg text-center justify-center border gap-x-1 p-1 w-fit", {
            'shadow-md': shadow,
            'shadow-none': !shadow,
            'text-base': size === 'default',
            'text-sm': size === 'sm'
        }, className)} {...props}>
            {children}
        </div>
    )
}

export const TabsButton = ({ children, selected, layoutId = 'tabsSelect', shadow = true, size = 'default', ...props }: { children: ReactNode, selected?: boolean, layoutId?: string, shadow?: boolean, size?: 'default' | 'sm', onClick?: () => void }) => {
    return (
        <button className={cn('transition-all duration-150 relative rounded-lg z-10', {
            'text-primary': selected,
            'text-muted-foreground hover:text-primary': !selected,
            'text-base px-6 py-2': size === 'default',
            'text-sm px-4 py-2': size === 'sm'
        })} {...props} onClick={props.onClick}>
            {children}
            {selected && <MotionSpan
                layoutId={layoutId}
                initial={false}
                transition={{ type: "spring", duration: 0.5 }}
                className={cn('absolute inset-0 -z-10 bg-background rounded-lg hover:cursor-default', {
                    'shadow-md': shadow,
                    'shadow-none': !shadow
                })}
            ></MotionSpan>}
        </button>
    )
}