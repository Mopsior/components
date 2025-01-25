import { DocsNavbar } from "@/features/docs-navbar";

export default function ComponentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="md:pb-10 pb-0">
            <DocsNavbar />
            <div className="bg-background w-[90%] my-5 md:w-3/5 mx-auto border rounded-tr-lg rounded-tl-lg md:rounded-lg border-border md:mt-24 shadow-sm">
                {children}
            </div>
        </div>
    )
}
