import eslint from '@rollup/plugin-eslint';

const devConfig = {
  server: {
    port: 2333,
    open: true,
    hmr: { overlay: true },
    proxy: {
      '/api': {
        target: 'http://xxx.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [{ ...eslint(), enforce: 'pre' }],
};

export default devConfig;
