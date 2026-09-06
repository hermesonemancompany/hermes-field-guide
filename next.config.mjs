/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/hermes-field-guide' : '')
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, basePath, assetPrefix: basePath ? `${basePath}/` : undefined }
export default nextConfig
