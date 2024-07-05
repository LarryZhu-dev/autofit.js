import { transformAsync } from '@babel/core';
import { createFilter, FilterPattern } from '@rollup/pluginutils';

export default function removeNamedExport(options: { include?: FilterPattern, exclude?: FilterPattern } = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'remove-named-export',

    async transform(code, id) {
      if (!filter(id)) {
        return null;
      }

      const { code: transformedCode } = await transformAsync(code, {
        babelrc: false,
        plugins: [[
          'babel-plugin-remove-import-export', {
            "removeImport": false,
            "removeExport": true,
            "removeExportDefault": false,
            "preseveNamedDeclaration": false
          }
        ]]
      });

      return {
        map: null,
        code: transformedCode,
      };
    }
  };
}
