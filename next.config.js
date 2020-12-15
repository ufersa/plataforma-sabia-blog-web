// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: !isProd,
	},
	images: {
		domains: [
			'rocketfinalchallenge.s3.amazonaws.com',
			'plataforma-sabia-blog-production.s3.sa-east-1.amazonaws.com',
		],
	},
	experimental: {
		optimizeFonts: true,
	},
	async redirects() {
		return [
			{
				source: '/admin',
				destination: 'https://google.com',
				permanent: true,
			},
		];
	},
});
