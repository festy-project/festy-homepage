/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { emotion: true },
  presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/core' }]],
  plugins: ['babel-plugin-emotion'],
  images: {
    domains: ['localhost', '127.0.0.1', 'i.scdn.co'],
  },
};

export default nextConfig;
