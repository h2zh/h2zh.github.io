/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_PUBLIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: isExport ? "export" : undefined,
  images: {
    // If you omit unoptimized, Next.js will optimize images in dev/server mode
    ...(isExport && { unoptimized: true }),
  },
};

module.exports = nextConfig;
