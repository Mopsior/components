'use client'

import { ClassNameValue } from "tailwind-merge";
import { CodeBlock } from "react-code-block"
import { cn } from "@/lib/utils";
import { useState } from "react";
import { catchError } from "@/utils/catch-error";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export const Code = ({ code, words, language, className }: { code: string, words?: Array<string>, language: string, className?: ClassNameValue }) => {
    const [copied, setCopied] = useState(false)
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
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 3000);
    }
    
    return (
        <CodeBlock code={code} language={language} words={words}>
            <div className="relative">
                <CodeBlock.Code className={cn('dark bg-[#0d1117] p-4 rounded-lg shadow-md border border-border overflow-x-auto whitespace-pre-wrap', className)}>
                <div className="table-row">
                        <CodeBlock.LineNumber
                            className="table-cell pr-4 text-sm text-gray-500 text-right select-none break-keep" />
                        <CodeBlock.LineContent className="table-cell">
                            <CodeBlock.Token>
                                {({ isTokenHighlighted, children }) => (
                                    <span className={
                                        isTokenHighlighted
                                        ? 'bg-violet-500/20 rounded px-1 py-0.5'
                                        : ''
                                    }>
                                        {children}
                                    </span>
                                )}  
                            </CodeBlock.Token>
                        </CodeBlock.LineContent>
                    </div>
                </CodeBlock.Code>
                <Button
                    variant={'outline'}
                    className={`absolute top-2 right-2 p-3 ${copied && "motion-preset-confetti"}`}
                    onClick={() => copy()}>{copied ? 'Copied! 🎉' : code.length < 90 ? <Copy /> : 'Copy Code'}</Button>
            </div>
        </CodeBlock>
    )
}