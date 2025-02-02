'use client'

import { useToast } from "@/hooks/use-toast"
import { MotionButton } from "@/lib/motion-components"
import { cn } from "@/lib/utils"
import { catchError } from "@/utils/catch-error"
import { Copy } from "lucide-react"
import { useAnimate } from "motion/react"
import { useState } from "react"

export const CopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false)
    const [scope, animate] = useAnimate()
    const { toast } = useToast()

    const copy = async () => {
        const [error] = await catchError(navigator.clipboard.writeText(code))
        
        if (error) {
            console.error(error)
            return toast({
                title: 'Code canno\t be copied',
                description: 'Try to copy code again, maybe it\'s a browser issue',
                variant: 'destructive'
            })
        }
        animate(scope.current, { width: '100px' })
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
            animate(scope.current, { width: code.length > 90 ? '96px' : '40px' })
        }, 3000);
    }

    return (
        <MotionButton
            variant={'outline'}
            ref={scope}
            className={cn(`absolute top-2 right-2 p-3 w-10 overflow-hidden`,
                copied && "motion-preset-confetti overflow-visible",
                code.length > 90 && 'w-24'
            )}
            onClick={() => copy()}>{copied ? 'Copied! 🎉' : code.length > 90 ? 'Copy code' : <Copy />}</MotionButton>
    )
}