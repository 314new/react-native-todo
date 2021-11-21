/*
 * @Description: all task list
 * @Author: zhangshuo
 * @Date: 2021-10-17 22:11:33
 * @LastEditors: zhangshuo
 */
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  VirtualizedList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import {themeColor} from '@utils/config.json';
// resource
import {_readData, _clearData, stringToObj} from '@utils/local.data';
// 组件
import ScreenContainer from '@components/ScreenContainer';
import {IconView} from '@components/IconView';
import TaskItem from '@screen/Fragements/TaskItem';

export default props => {
  const {navigation, route} = props;
  // update header options, config headerRight option
  const {title} = route.params;
  // 任务列表
  const [tasks, setTasks] = useState([]);
  // refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      onFresh();
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setTasks([]);
    });
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${title}(${tasks.length})`,
      headerRight: () => (
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate('addTask', {
              title: '添加任务',
            })
          }>
          <IconView
            name="add-circle-outline"
            size={24}
            color="#ffffff"></IconView>
        </TouchableOpacity>
      ),
    });
  }, [tasks]);

  // load task
  const loadTask = () => {
    return _readData('@TaskList').then(res => (res ? stringToObj(res) : []));
  };

  // refresh list
  const onFresh = () => {
    setRefreshing(true);
    loadTask().then(res => {
      setTimeout(() => {
        setTasks(res);
        setRefreshing(false);
      }, 500);
    });
  };

  return (
    <ScreenContainer>
      {/* list */}
      <VirtualizedList
        style={styles.container}
        data={tasks}
        getItemCount={() => tasks.length}
        getItem={(item, index) => item[index]}
        renderItem={({item, index}) => (
          <TaskItem index={index} key={item.id} {...item} />
        )}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            colors={[themeColor]}
            refreshing={refreshing}
            onRefresh={onFresh}
          />
        }
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  addButton: {
    padding: 10,
    color: '#ffffff',
  },
  container: {},
});
