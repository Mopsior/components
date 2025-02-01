'use client'

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { catchError } from "@/utils/catch-error"
import { useState } from "react"

export const CopyButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false)
    const { toast } = useToast()

    const copy = async () => {
        const [error] = await catchError(navigator.clipboard.writeText(code))
        console.log(code)
        
        if (error) {
            console.error(error)
            return toast({
                title: 'Code canno\t be copied',
                description: 'Try to copy code again, maybe it\'s a browser issue',
                variant: 'destructive'
            })
        }
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }


    return (
        <Button
            variant={'outline'}
            className={`absolute top-2 right-2 ${copied && "motion-preset-confetti"}`}
            onClick={() => copy()}>{copied ? 'Copied! 🎉' : 'Copy Code'}</Button>
    )
}