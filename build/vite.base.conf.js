import { merge } from 'webpack-merge';
import { resolve } from './tools';
import devConfig from './vite.dev.conf';

const config = ({ mode }) => {
  let baseConfig = {
    // base: loadEnv(mode, process.cwd()).VITE_BASE,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    build: {
      assetsDir: 'static',
    },
    plugins: [],
  };
  // --mode xxx
  if (mode === 'development') {
    baseConfig = merge(baseConfig, devConfig);
  }

  return baseConfig;
};

export default config;
