import { redirect } from "next/navigation"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    if (slug.length <= 0) {
        redirect('/')
    }
    const mdxContent = await import(`@/content/${slug}.mdx`)

    return (
        <div className="md:p-10 p-6 pb-10 gap-y-8 flex flex-col">
            <div className="flex flex-col gap-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{mdxContent.frontmatter.title}</h1>
                <p className="text-muted-foreground">{mdxContent.frontmatter.description}</p>
            </div>
            <div className="break-words">
                <mdxContent.default />
            </div>
        </div>
    )
}