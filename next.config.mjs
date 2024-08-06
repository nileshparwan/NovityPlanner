/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config, { isServer }) {
        // Performance optimizations
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          });

        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                minSize: 20000,
                maxSize: 70000,
            };
        }

        return config;
    },
};

export default nextConfig;
