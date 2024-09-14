/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,
  
    // Enable SWC for faster builds and minification
    swcMinify: true,
  
    // Configure images (optional)
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  
    // Experimental features (optional)
    experimental: {
      scrollRestoration: true,  // Retains scroll position when navigating back/forward
      reactRoot: true,          // Enables React 18 features
    },
  };
  
  export default nextConfig;
  