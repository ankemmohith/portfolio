/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // generate a static site in ./out
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next Image optimization
  },
  // Project site under https://ankemmohith.github.io/portfolio
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
};

export default nextConfig;