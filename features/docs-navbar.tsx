
import { Separator } from "@/components/ui/separator"
import { sitemap, SitemapSection } from "@/content/sitemap"
import { NavElement } from "./docs-nav-element"

export const DocsNavbar = () => {
    return (
        <aside className="bg-background border rounded-tr-lg rounded-br-lg shadow-lg py-6 gap-y-6 flex-col overflow-y-auto sticky left-0 top-24 min-w-64 max-w-96 h-fit hidden lg:flex">
            {Object.entries(sitemap as Record<string, SitemapSection>).map(([key, value]) => (
                <div key={key}>
                    <div className="flex flex-col text-base gap-y-1 px-8">
                        <h3 className="leading-7 font-bold px-4 text-primary">{value.name}</h3>
                        {value.documents.map((doc, index) => (
                            <NavElement name={doc.name} url={doc.url} key={index} badge={doc.badge} />
                        ))}
                    </div>
                    <Separator className="visible last:hidden"/>
                </div>
            ))}
        </aside>
    )
}