/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "lastfm.freetls.fastly.net",
            "en.wikipedia.org",
            "upload.wikimedia.org",
            "localhost"
        ]
    },
    experimental: {
        images: {
            unoptimized: true
        }
    }
}

module.exports = nextConfig
