import buble from 'rollup-plugin-buble';
import butternut from 'rollup-plugin-butternut';

const min = process.env.min;

const config = {
  input: './src/index.js',
  plugins: [
    buble()
  ]
};

if(min) {
  config.plugins.push(butternut());
}

export default config;
