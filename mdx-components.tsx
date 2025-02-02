import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Url } from 'url'
import { Code } from './features/code-block'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h2: (props) => (
            <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4' {...props} />
        ),
        h3: (props) => (
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-8' {...props} />
        ),
        p: (props) => (
            <p className='leading-7 [&:not(:first-child)]:mt-2' {...props} />
        ),
        blockquote: (props) => (
            <blockquote className='mt-6 border-l-2 pl-6 italic' {...props}/>
        ),
        ul: (props) => (
            <ul className='my-6 ml-6 list-disc [&>li]:mt-2' {...props} />
        ),
        code: (props) => (
            <code {...props} />
        ),
        a: (props) => (
            <Link className='relative z-10 before:content=[""] before:bg-primary before:absolute before:w-full before:h-[2px] before:-z-10 before:-bottom-[2px] before:transition-all before:hover:h-[130%] hover:text-background' {...props} href={props.href as unknown as Url} />
        ),
        pre: (props) => {
            const children = props.children as React.ReactElement
            return (
                <Code code={children.props.children} language={children.props.className ? children.props.className.substr(9) : '' } className="mt-8" {...props} />
            )
        },
        ...components,
    }
}