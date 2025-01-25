import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { Url } from 'url'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h2: (props) => (
            <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10' {...props} />
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
            <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold' {...props} />
        ),
        a: (props) => (
            <Link className='underline underline-offset-4' {...props} href={props.href as unknown as Url} />
        ),
        ...components,
    }
}