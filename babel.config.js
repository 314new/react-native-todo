/*
 * @Description:
 * @Author: zhangshuo
 * @Date: 2021-10-16 14:35:50
 * @LastEditors: zhangshuo
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@router': './src/router',
          '@components': './src/components',
          '@screen': './src/screen',
        },
      },
    ],
  ],
};
