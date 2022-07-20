/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: [
            "lastfm.freetls.fastly.net",
            "en.wikipedia.org",
            "upload.wikimedia.org",
            "localhost"
        ]
    }
}

module.exports = nextConfig
