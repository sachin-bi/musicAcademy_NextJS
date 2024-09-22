/** @type {import('next').NextConfig} */
const nextConfig = {
    // you need to add this if you want to use images in your app
    images: {
        domains: ["images.unsplash.com", "lh3.googleusercontent.com","plus.unsplash.com"],
        // remotePatterns: ["images.unsplash.com", "lh3.googleusercontent.com"]
    }
};

export default nextConfig;
