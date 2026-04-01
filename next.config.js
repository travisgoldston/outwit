/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/solutions",
        destination: "/lab",
        permanent: true,
      },
      {
        source: "/solutions/:path*",
        destination: "/lab",
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
        destination: "/lab",
        permanent: true,
      },
      {
        source: "/case-studies/:path*",
        destination: "/lab",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/about",
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
