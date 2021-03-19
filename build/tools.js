import path from 'path';
const glob = require('glob');

function resolve(dir) {
  return path.resolve(__dirname, '..', dir);
}

function getEntries() {
  let indexs = glob('demo/*/index.js', { sync: true });
  const entries = indexs.reduce(
    (ret, file) => {
      const [, entry] = file.split('/');
      ret[entry] = resolve(file);
      return ret;
    },
    { demo: resolve('demo/index.js') }
  );
  return entries;
}

export { resolve, getEntries };
