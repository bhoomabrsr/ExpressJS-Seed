import { resolve } from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import ESLintPlugin from 'eslint-webpack-plugin';


interface WebpackConfiguration {
  (env?: any, argv?: any): Configuration;
}

const config:WebpackConfiguration = (env, argv) => {
  console.log(env, argv);
  return {
    mode: argv.mode || 'production',
    entry: `./src/index.ts`,
    target: 'node',
    node: { __dirname: false },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    externals: [nodeExternals()],
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['node_modules', resolve(__dirname, './src')]
    },
    module: {
      rules: [
        //{ enforce: 'pre', test: /\.ts$|\.js$/, exclude: /(node_modules|bower_components|build)/, loader: 'eslint-loader', options: { emitWarning: true, failOnError: true, failOnWarning: false }},
        { test: /\.ts$/, use: [{ loader: 'ts-loader' }] }
      ]
    },
    plugins: [
      new ESLintPlugin({extensions: ['ts']})
    ].filter(Boolean),
  }
};

export default config;
