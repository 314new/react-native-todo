/*
 * @Description: all task list
 * @Author: zhangshuo
 * @Date: 2021-10-17 22:11:33
 * @LastEditors: zhangshuo
 */
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Text,
  StyleSheet,
  VirtualizedList,
  RefreshControl,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {themeColor} from '@utils/config.json';
// resource
import {_readData, _setData, stringToObj} from '@utils/local.data';
// 组件
import ScreenContainer from '@components/ScreenContainer';
import TaskItem from '@screen/Fragements/TaskItem';

export default props => {
  const {navigation, route} = props;
  // update header options, config headerRight option
  const {title} = route.params;
  // 任务列表
  const [tasks, setTasks] = useState([]);
  // 选中条数
  const [dones, updateDones] = useState([]);
  // refresh state
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      onFresh();
    });
    const unsubscribeBlur = navigation.addListener('blur', () => {
      setTasks([]);
      updateDones([]);
    });
    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${title}(${tasks.length})`,
      headerRight: () =>
        dones.length ? (
          <TouchableOpacity
            disableBuiltInState
            style={styles.deleteButton}
            activeOpacity={0.6}
            onPress={doneTask}>
            <Text>完成</Text>
          </TouchableOpacity>
        ) : (
          <></>
        ),
    });
  }, [tasks, dones]);

  // load task
  const loadTask = () => {
    return _readData('@TaskList').then(res => (res ? stringToObj(res) : []));
  };

  const recordDone = record => {
    const position = dones.findIndex(taskid => taskid === record.id);
    if (position === -1) {
      dones.push(record.id);
    }
    if (position > -1) {
      dones.splice(position, 1);
    }
    updateDones(arr => [...dones]);
  };

  // refresh list
  const onFresh = () => {
    setRefreshing(true);
    loadTask().then(res => {
      setTimeout(() => {
        setTasks(res.filter(task => !task.done));
        setRefreshing(false);
      }, 500);
    });
  };

  const doneTask = async () => {
    if (dones.length) {
      try {
        loadTask().then(async res => {
          const reSign = res.map(task => {
            if (dones.includes(task.id)) {
              task.done = true;
            }
            return task;
          });
          await _setData('@TaskList', [...reSign]);
          ToastAndroid.show('任务完成', ToastAndroid.SHORT);
          setTasks([]);
          updateDones([]);
          onFresh();
        });
      } catch (err) {
        ToastAndroid.show('确认完成失败', ToastAndroid.SHORT);
      }
    }
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
          <TaskItem index={index} key={item.id} {...item}>
            <BouncyCheckbox
              disableBuiltInState
              disableText={true}
              isChecked={dones.includes(item.id)}
              fillColor={themeColor}
              size={26}
              onPress={isChecked => recordDone(item)}
            />
          </TaskItem>
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
  deleteButton: {
    padding: 10,
    color: '#ffffff',
  },
  container: {},
});
