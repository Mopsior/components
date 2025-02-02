import { DocsDrawer } from "@/features/docs-drawer";
import { DocsNavbar } from "@/features/docs-navbar";

export default function ComponentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="md:pb-10 pb-0 flex">
            <DocsDrawer />
            <DocsNavbar />
            <div className="bg-background w-[90%] my-5 md:w-3/5 mx-auto md:ml-20 border rounded-tr-lg rounded-tl-lg md:rounded-lg border-border lg:mt-24 shadow-lg max-md:mb-0">
                {children}
            </div>
        </div>
    )
}
