'use client'
import { Tabs, TabsButton } from "@/components/custom/tabs"
import { type ReactNode, useState } from "react"
import { Code } from "./code-block"
import { ClassNameValue } from "tailwind-merge"
import { cn } from "@/lib/utils"

/**
 * PreviewSwitch component
 * code: string - String with code (remember to remove tabs)
 * language: string - Language of the code (e.g. ts, js, jsx)
 * children: ReactNode - Component to preview
 */
export const PreviewSwitch = ({ code, language, children, layoutId, className }: { code: string, language: string, children: ReactNode, layoutId?: string, className?: ClassNameValue }) => {
    const [selected, setSelected] = useState<'preview' | 'code'>('preview')

    return (
        <div className={cn("space-y-5", className)}>
            <Tabs>
                <TabsButton selected={selected === 'preview'} onClick={() => setSelected('preview')} size='sm' layoutId={layoutId || 'preview-tabs-1'}>Preview</TabsButton>
                <TabsButton selected={selected === 'code'} onClick={() => setSelected('code')} size='sm' layoutId={layoutId || 'preview-tabs-1'}>Code</TabsButton>
            </Tabs>
            {
                selected === 'preview' && <div className="rounded-lg border min-h-96 w-full lg:p-10 p-5 relative shadow-sm flex justify-center items-center overflow-x-auto">
                    {children}
                </div>
            }
            {
                selected === 'code' && <Code code={code} language={language} />   
            }
        </div>
    )
}