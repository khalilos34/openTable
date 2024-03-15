/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:'resizer.otstatic.com'
        }]
    }
};

export default nextConfig;
