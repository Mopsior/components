import { Separator } from "@/components/ui/separator"
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

    console.log(mdxContent.frontmatter)

    return (
        // <div className="w-full max-w-[100vw] px-5 lg:px-96 lg:mx-auto h-full pt-5 py-2 lg:py-10 break-normal">
        <>
            <div className="flex flex-col gap-y-4 p-8 pb-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{mdxContent.frontmatter.title}</h1>
                <p className="text-foreground">{mdxContent.frontmatter.description}</p>
            </div>
            <Separator />
            <div className="p-8 pt-4 break-words">
                <mdxContent.default />
            </div>
        </>
        // </div>
    )
}