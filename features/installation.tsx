'use client'

import { Children, cloneElement, Dispatch, ReactElement, ReactNode, SetStateAction, useState } from "react"
import { PMCodeBlock } from "./pm-code-block"
import { Code } from "./code-block"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"

export const Installation = ({
    npm,
    yarn,
    pnpm,
    bun,
    code,
    language,
    implementation,
    disableDependencies
}: {
    npm: string,
    yarn: string,
    pnpm: string,
    bun: string,
    code: string,
    language?: string,
    implementation: string,
    disableDependencies?: boolean
}) => {
    const [selected, setSelected] = useState<number>(1)

    return (
        <div className="relative">
            <div className="mt-4 space-y-4 pl-8 before:content-[''] before:absolute before:w-[2px] before:h-full before:bg-border before:top-0 before:rounded-lg before:left-0">
                <StepsList>
                    { !disableDependencies && (
                        <Step selected={selected}
                            title="Install dependencies"
                            description="Install required dependencies"
                            setSelected={setSelected}>
                            <PMCodeBlock
                                className='mt-3'
                                npm={npm}
                                yarn={yarn}
                                pnpm={pnpm}
                                bun={bun}/>
                        </Step>
                    )}
                    <Step selected={selected}
                        title="Copy component file"
                        description="Copy and paste the following component (without need to modify)"
                        setSelected={setSelected}>
                        <Code code={code} language={language || 'ts'} className='mt-4' />
                    </Step>
                    <Step selected={selected}
                        title="Start using"
                        description="How to implement component in your project"
                        setSelected={setSelected}>
                        <Code code={implementation} language={language || 'ts'} className='mt-4' />
                    </Step>
                </StepsList>
            </div>
        </div>
    )
}

const StepsList = ({ children }: { children: ReactNode }) => {
    const steps = Children.toArray(children);
    return steps.map((step, index) => (
        cloneElement(step as ReactElement, {
            key: index,
            count: index + 1
        })
    ));
}

const Step = ({ title, description, children, count, selected, setSelected }: { title: string, description: string, children: ReactNode, count?: number, selected: number, setSelected: Dispatch<SetStateAction<number>> }) => (
    <div
        className={cn(`relative border rounded-lg p-4 w-full h-fit`, {
            'opacity-100 cursor-default': selected === count,
            'opacity-60 cursor-pointer': selected !== count,
        })}
        onClick={() => { count !== undefined && setSelected(count) }}>
        <button className="text-left ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-8 focus-visible:rounded-sm">
            <h2 className="text-primary">{title}</h2>
            <p className="text-muted-foreground text-sm">{description}</p>
        </button>
        <AnimatePresence initial={false}>
            {selected === count &&
                <motion.div
                className="overflow-clip"
                    layout
                    initial={{ height: 0, opacity: 0.6 }}
                    animate={{ height: selected === count ? 'auto' : 0, opacity: selected === count ? 1 : 0.6 }}
                    exit={{ height: 0, opacity: 0.6 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}>
                    {selected === count && children}
                </motion.div> 
            }
            </AnimatePresence>
        <StepIdentifier count={count} />
    </div>
)

const StepIdentifier = ({ count }: { count?: number }) => (
    <div className="size-8 rounded-full bg-background border-2 absolute -left-12 top-1/2 -translate-y-1/2 transform text-base text-primary flex items-center justify-center">
        <span>{count}</span>
    </div>
)