/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	output: 'export',
	target: 'experimental-serverless-trace',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
