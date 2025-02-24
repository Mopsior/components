export type SitemapDocumentType = {
    name: string
    url: string
    keywords?: string[]
}

export const sitemap = {
    components: {
        name: 'Components',
        documents: [
            {
                name: 'Callout',
                url: '/components/callout',
            }
        ]
    },
    info: {
        name: 'Testing',
        documents: [
            {
                name: 'Test document',
                url: '/components/example',
                keywords: ['test', 'example']
            }
        ]
    }
}