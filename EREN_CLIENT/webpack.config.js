const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all', // Split all chunks
        },
    },
    plugins: [
        new WebpackObfuscator({
            rotateStringArray: true,
        }),
    ],
};
