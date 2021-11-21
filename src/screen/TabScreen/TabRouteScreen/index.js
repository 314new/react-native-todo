/*
 * @Description: all task list
 * @Author: zhangshuo
 * @Date: 2021-10-17 22:11:33
 * @LastEditors: zhangshuo
 */
import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// compnent
import TasksScreen from '@screen/TabScreen/TasksScreen';

const Stacks = createNativeStackNavigator();

export default ({navigation, route}) => {
  const {params} = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Stacks.Navigator>
      <Stacks.Group>
        <Stacks.Screen
          initialParams={params}
          name="Tasks"
          component={TasksScreen}></Stacks.Screen>
      </Stacks.Group>
    </Stacks.Navigator>
  );
};
