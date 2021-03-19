import { merge } from 'webpack-merge';
import { getEntries } from './tools';
import baseConfig from './vite.base.conf';

const config = ({ mode }) => {
  let demoConfig = {
    build: {
      outDir: 'example',
      rollupOptions: {
        input: getEntries(),
      },
    },
  };

  demoConfig = merge(baseConfig({ mode }), demoConfig);

  return demoConfig;
};

export default config;
