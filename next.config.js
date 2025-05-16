/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Disable the `/` redirect to prevent 404s
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;