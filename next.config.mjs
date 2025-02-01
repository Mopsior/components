import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeStarryNight from 'rehype-starry-night';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desire
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    // rehypePlugins: [rehypeStarryNight],
  }
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)