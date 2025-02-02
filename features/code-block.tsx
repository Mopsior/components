'use client'
import { ClassNameValue } from "tailwind-merge";
import { CodeBlock } from "react-code-block"
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

export const Code = ({ code, words, language, className }: { code: string, words?: Array<string>, language: string, className?: ClassNameValue }) => {
    
    return (
        <CodeBlock code={code} language={language} words={words}>
            <div className="relative">
                <CodeBlock.Code className={cn('dark bg-[#0d1117] p-4 rounded-lg shadow-md border border-border overflow-x-auto whitespace-pre-wrap text-sm', className)}>
                <div className="table-row">
                        <CodeBlock.LineNumber
                            className="table-cell pr-4 text-sm text-gray-500 text-right select-none break-keep" />
                        <CodeBlock.LineContent className="table-cell">
                            <CodeBlock.Token>
                                {({ isTokenHighlighted, children }) => (
                                    <span className={cn('', isTokenHighlighted && 'bg-violet-500/20 rounded px-1 py-0.5')}>
                                        {children}
                                    </span>
                                )}  
                            </CodeBlock.Token>
                        </CodeBlock.LineContent>
                    </div>
                </CodeBlock.Code>
                <CopyButton code={code} />
            </div>
        </CodeBlock>
    )
}