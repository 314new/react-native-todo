/*
 * @Description: task item card
 * @Author: zhangshuo
 * @Date: 2021-10-31 23:06:42
 * @LastEditors: zhangshuo
 */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IconView} from '@components/IconView';

export default props => {
  const {index, id, done, title, content, children} = props;

  return (
    <View style={[styles.task, {marginTop: index == 0 ? 14 : 0}]}>
      <View style={styles.taskHeader}>
        <View style={styles.headerLeft}>
          <IconView
            name={done ? 'checkmark-circle' : 'lock-closed'}
            size={done ? 16 : 14}
            color={done ? '#52c41a' : 'color: rgba(0, 0, 0, 0.5)'}></IconView>
          <Text style={styles.statu}>{done ? '已完成' : '待完成'}</Text>
        </View>
        <View>{children}</View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{content}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  task: {
    marginBottom: 14,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: 10,
    shadowOpacity: 0.3,
    shadowRadius: 1,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.04)',
    backgroundColor: '#ffffff',
  },
  taskHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.04)',
    color: 'rgba(0, 0, 0, 0.8)',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statu: {
    paddingLeft: 2,
    fontSize: 12,
  },
  title: {
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    paddingHorizontal: 10,
    paddingTop: 6,
    paddingBottom: 10,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});
