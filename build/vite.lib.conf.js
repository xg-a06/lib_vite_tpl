import { merge } from 'webpack-merge';
import { resolve } from './tools';
import baseConfig from './vite.base.conf';
import pkg from '../package.json';

const libConfig = {
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      name: pkg.name,
      // formats: ['es', 'umd', 'cjs', 'iife'],
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      // external: ['vue'],
      // output: {
      //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    },
  },
};

export default merge(baseConfig, libConfig);
