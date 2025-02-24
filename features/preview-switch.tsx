'use client'
import { Tabs, TabsButtons } from "@/components/custom/tabs"
import { type ReactNode, useState } from "react"
import { Code } from "./code-block"

/**
 * PreviewSwitch component
 * code: string - String with code (remember to remove tabs)
 * language: string - Language of the code (e.g. ts, js, jsx)
 * children: ReactNode - Component to preview
 */
export const PreviewSwitch = ({ code, language, children }: { code: string, language: string, children: ReactNode }) => {
    const [selected, setSelected] = useState<'preview' | 'code'>('preview')

    return (
        <div className="space-y-5">
            <Tabs>
                <TabsButtons selected={selected === 'preview'} onClick={() => setSelected('preview')}>Preview</TabsButtons>
                <TabsButtons selected={selected === 'code'} onClick={() => setSelected('code')}>Code</TabsButtons>
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