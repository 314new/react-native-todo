/*
 * @Description: 本地数据操作
 * @Author: zhangshuo
 * @Date: 2021-11-21 11:05:27
 * @LastEditors: zhangshuo
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

// object to stirng
const objToString = data => JSON.stringify(data);

// string ti obj
const stringToObj = string => JSON.parse(string);

// read data
const _readData = key => {
  return AsyncStorage.getItem(key);
};

// set data
const _setData = (key, data) => {
  return AsyncStorage.setItem(key, objToString(data));
};

// clear data
const _clearData = () => {
  return AsyncStorage.clear();
};

export {objToString, stringToObj, _readData, _setData, _clearData};
