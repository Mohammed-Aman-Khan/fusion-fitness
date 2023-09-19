/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_DB_URI:
      "mongodb+srv://fusion-fitness:fusion-fitness@fusion-fitness.6mre53d.mongodb.net/fusion-fitness?retryWrites=true&w=majority",
    ADMIN_PASSWORD: "fusion-fitness-admin",
  },
  transpilePackages: [
    "@mui/lab",
    "@mui/material",
    "@mui/icons-material",
    "react-type-animation",
    "react-marquee-slider",
    "react-reveal",
  ],
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
