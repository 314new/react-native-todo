/*
 * @Description: IconView
 * @Author: zhangshuo
 * @Date: 2021-10-29 04:06:13
 * @LastEditors: zhangshuo
 */
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconView = props => {
  const {name, size = 24, color} = props;
  return <Ionicons name={name} size={size} color={color} />;
};

const TabIcon = props => {
  const {focused, name, size, color} = props;
  return <IconView name={name} size={size} color={color} />;
};

export {IconView, TabIcon};
