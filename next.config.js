/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kayteam.org"]
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
