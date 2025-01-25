import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono'
import { Navbar } from "@/features/navbar";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={`${GeistMono.variable} ${GeistSans.variable}`}>
            <body
                className={`antialiased bg-[radial-gradient(#e3e3e3_1.8px,_white_1.8px)] md:bg-[radial-gradient(#e3e3e3_0.9px,_white_0.9px)] [background-size:_18px_18px] dark:bg-[radial-gradient(#1a1a1a_1.8px,_black_1.8px)] md:dark:bg-[radial-gradient(#1a1a1a_0.9px,_black_0.9px)] dark:[background-size:_18px_18px] w-full`}
            >
                <ThemeProvider attribute='class'>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
