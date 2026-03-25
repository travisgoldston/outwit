/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/solutions",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/solutions/:path*",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/insights/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
