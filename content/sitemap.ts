
export type SitemapSection = {
    name: string
    documents: SitemapDocument[]
}

export type SitemapDocument = {
    name: string
    url: string
    keywords?: string[]
    badge?: 'beta' | 'not-ready'
}

export const sitemap = {
    info: {
        name: 'Testing',
        documents: [
            {
                name: 'Test document',
                url: '/components/example',
                keywords: ['test', 'example']
            }
        ]
    },
    components: {
        name: 'Components',
        documents: [
            {
                name: 'Callout',
                url: '/components/callout',
            },
            {
                name: 'Tabs',
                url: '/components/tabs',
                keyword: ['switch', 'navigation'],
                badge: 'beta'
            }
        ]
    },
    animatedLayouts: {
        name: 'Animated Layouts',
        documents: [
            {
                name: 'Delete button',
                url: '/components/layout-delete-button',
            }
        ]
    }
}