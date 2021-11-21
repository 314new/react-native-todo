/*
 * @Description: container of aplication
 * @Author: zhangshuo
 * @Date: 2021-10-29 04:04:27
 * @LastEditors: zhangshuo
 */
import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

export default props => {
  const {children: screen} = props;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      {screen}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: '#ffffff',
  },
});
