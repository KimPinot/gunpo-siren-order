module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'styled-components',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screen': ['./src/screen'],
          '@interface': ['./src/interface'],
          '@lib': ['./src/lib'],
          '@component': ['./src/component'],
        },
      },
    ],
  ],
};
