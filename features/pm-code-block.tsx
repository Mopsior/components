'use client'
import { Tabs, TabsButton } from "@/components/custom/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ClassNameValue } from "tailwind-merge";
import { Code } from "./code-block";

export const PMCodeBlock = ({
    npm,
    yarn,
    pnpm,
    bun,
    className,
}: {
    npm?: string,
    yarn?: string,
    pnpm?: string,
    bun?: string,
    className?: ClassNameValue,
}) => {
    const [selected, setSelected] = useState<'npm' | 'yarn' | 'pnpm' | 'bun'>('npm')

    return (
        <div className={cn("space-y-2", className)}>
            <Tabs size='sm' shadow={false} className="max-md:flex-wrap">
                {npm && <TabsButton
                    size="sm"
                    selected={selected === 'npm'}
                    onClick={() => setSelected('npm')}
                    
                    layoutId="pm-tabs-1"
                    >NPM</TabsButton>}
                {yarn && <TabsButton
                    size="sm"
                    selected={selected === 'yarn'}
                    onClick={() => setSelected('yarn')}
                    
                    layoutId="pm-tabs-1"
                    >Yarn</TabsButton>}
                {pnpm && <TabsButton
                    size="sm"
                    selected={selected === 'pnpm'}
                    onClick={() => setSelected('pnpm')}
                    
                    layoutId="pm-tabs-1"
                    >PNPM</TabsButton>}
                {bun && <TabsButton
                    size="sm"
                    selected={selected === 'bun'}
                    onClick={() => setSelected('bun')}
                    
                    layoutId="pm-tabs-1"
                    >Bun</TabsButton>}
            </Tabs>
            <Code
                language='bash'
                code={
                    selected === 'npm' ? npm ?? '' :
                    selected === 'yarn' ? yarn ?? '' :
                    selected === 'pnpm' ? pnpm ?? '' :
                    selected === 'bun' ? bun ?? '' : ''
                } />
        </div>
    )
}