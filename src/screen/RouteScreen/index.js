/*
 * @Description: main tab container for App
 * @Author: zhangshuo
 * @Date: 2021-10-16 14:35:50
 * @LastEditors: zhangshuo
 */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tabs from '@router';
// resource
import {commonHeaderStyle, commonTabStyle} from '@utils/style.config';
// components
import {TabIcon} from '@components/IconView';

// TabSreen Object
const TabScreen = createBottomTabNavigator();

// main tabs container
const App = props => {
  return (
    <TabScreen.Navigator
      screenOptions={() => ({
        // header style and color
        ...commonHeaderStyle,
        // tab actived or inactived style
        ...commonTabStyle,
      })}>
      {tabs.map(tab => {
        const {title, name, label, component, icon} = tab;
        return (
          <TabScreen.Screen
            key={name}
            initialParams={{title: title}}
            name={name}
            component={component}
            options={{
              title: title,
              tabBarLabel: label,
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <TabIcon
                    name={icon}
                    focused={focused}
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          />
        );
      })}
    </TabScreen.Navigator>
  );
};

export default App;
