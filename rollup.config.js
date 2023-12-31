import * as path from 'path'
import * as fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
// import packageJson from './package.json'
import dts from 'rollup-plugin-dts'
import less from 'less'

// 入口

const entry = 'src/index.ts'
const componentsDir = 'src/components'
const componentsName = fs.readdirSync(path.resolve(componentsDir))
const componentsEntry = componentsName.map(
  (name) => `${componentsDir}/${name}/index.ts`
)
// 环境变量
// const isProd = process.env.NODE_ENV === 'production'
const isProd = 'production'

// const BABEL_ENV = process.env.BABEL_ENV
const BABEL_ENV = 'production'


// Babel配置
const babelOptions = {
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  exclude: "**/node_modules/**"
}

// 通用插件
const commonPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs({ sourceMap: !isProd }),
  typescript(),
  babel(babelOptions),
  json(),
  // dts()
]
// 忽略文件
const externalConfig = [
    id => /\/__expample__|main.tsx/.test(id),
    'react',
    'react-dom',
    'classname',
    'react-is',
    '**/node_modules/**',
    '**/*stories*'
  ]

  // less打包
const processLess = function (context) {
    return new Promise((resolve, reject) => {
      less.compile(
        {
          file: context
        },
        function (err, result) {
          if (!err) {
            resolve(result)
          } else {
            reject(result)
          }
        }
      );
      less.compile(context, {}).then(
        function (output) {
          if (output && output.css) {
            resolve(output.css)
          } else {
            reject({})
          }
        },
        function (err) {
          reject(err)
        }
      )
    })
  }

  // ES Module打包输出
const esmOutput = {
    preserveModules: true,
    // preserveModulesRoot: 'src',
    // exports: 'named',
    assetFileNames: ({ name }) => {
      const { ext, dir, base } = path.parse(name);
      if (ext !== '.css') return '[name].[ext]';
      // 规范 style 的输出格式
      return path.join(dir, 'style', base);
    }
  }
  export default () => {
    switch (BABEL_ENV) {
      case 'esm':
        return [
          {
            input: [entry, ...componentsEntry],
            output: { ...esmOutput, dir: 'dist/', format: 'es' },
            external: externalConfig,
            plugins: [postcss({
              extract: true,
              process: processLess
            }), ...commonPlugins]
          },
          {
            input: [entry, ...componentsEntry],
            output: { ...esmOutput, dir: 'dist/type', format: 'es' },
            external: externalConfig,
            plugins: [postcss({
              extract: true,
              process: processLess
            }), ...commonPlugins, dts()]
          }
        ]
    }
  }