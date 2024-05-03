/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/sobre-mim',
                destination: '/sobremim',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
