/*
 * @Description: 配置信息
 * @Author: zhangshuo
 * @Date: 2021-11-20 15:54:19
 * @LastEditors: zhangshuo
 */
import {initThemeColor, themeColor} from '@utils/config.json';

const commonHeaderStyle = {
  headerStyle: {
    backgroundColor: themeColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 18,
  },
};

const commonTabStyle = {
  color: themeColor,
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: '800',
    paddingBottom: 4,
  },
  tabBarActiveTintColor: themeColor,
  tabBarInactiveTintColor: initThemeColor,
};

export {commonHeaderStyle, commonTabStyle};
