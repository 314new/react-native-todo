/*
 * @Description:
 * @Author: zhangshuo
 * @Date: 2021-11-14 21:58:53
 * @LastEditors: zhangshuo
 */
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
