/*
 * @Description: all task list
 * @Author: zhangshuo
 * @Date: 2021-10-17 22:11:33
 * @LastEditors: zhangshuo
 */
import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// resource
import {commonHeaderStyle, commonTabStyle} from './src/utils/style.config';
// compnent
import RouteScreen from '@screen/RouteScreen';
import AddScreen from '@screen/ModalScreen/AddScreen';

const Stacks = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator
        screenOptions={() => ({
          // header style and color
          ...commonHeaderStyle,
          // tab actived or inactived style
          ...commonTabStyle,
        })}>
        <Stacks.Group>
          <Stacks.Screen
            name="Entry"
            options={{
              headerShown: false,
            }}
            component={RouteScreen}></Stacks.Screen>
        </Stacks.Group>
        <Stacks.Group>
          <Stacks.Screen
            screenOptions={{
              presentation: '',
              commonHeaderStyle,
            }}
            name="addTask"
            component={AddScreen}></Stacks.Screen>
        </Stacks.Group>
      </Stacks.Navigator>
    </NavigationContainer>
  );
};
