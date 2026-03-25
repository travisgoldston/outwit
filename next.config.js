/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/solutions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solutions/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/",
        permanent: true,
      },
      {
        source: "/case-studies/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/insights/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
