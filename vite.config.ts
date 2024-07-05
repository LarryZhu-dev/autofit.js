import path from 'node:path';
import * as process from 'process';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import terser from '@rollup/plugin-terser';
import license from 'rollup-plugin-license';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import type { OutputOptions, OutputPluginOption } from 'rollup';
import removeNamedExport from './build/rollup-plugin-remove-named-export';

import packageJSON from './package.json';

const author = typeof packageJSON.author === 'string' ? packageJSON.author : ''; // packageJSON.author.name

export default defineConfig({
  root: path.resolve(process.cwd(), './dev'),
  plugins: [
    removeNamedExport(),
    getBabelOutputPlugin({
      allowAllFormats: true,
      presets: [["@babel/preset-env"]],
    }),
    vue(),
  ],
  build: {
    lib: {
      entry: path.resolve(process.cwd(), './src/index.ts'),
    },
    minify: false,
    emptyOutDir: false,
    rollupOptions: {
      output: [
        createOutput({
          entryFileNames: 'autofit.js',
        }),
        createOutput({
          entryFileNames: 'autofit.min.js',
          plugins: [
            terser(),
          ]
        }),
      ]
    }
  },
});

function createOutput(options: OutputOptions = {
  plugins: [],
  entryFileNames: ''
}): OutputOptions {
  const plugins = (options?.plugins ?? []) as OutputPluginOption[];
  return {
    dir: path.resolve(process.cwd(), './'),
    entryFileNames: options?.entryFileNames,
    format: 'umd',
    name: 'autofit',
    exports: 'default',
    plugins: [
      license({
        banner: {
          commentStyle: 'regular',
          content: `${packageJSON.name} v${packageJSON.version}
(c) 2023-present${author ? ` ${author}` : ''}
Released under the MIT License.`,
        }
      }),
      ...plugins,
    ],
    ...options,
  };
}
