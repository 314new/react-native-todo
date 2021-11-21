/*
 * @Description: add task modal
 * @Author: zhangshuo
 * @Date: 2021-11-07 13:05:08
 * @LastEditors: zhangshuo
 */
import React, {useLayoutEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import uuid from 'react-native-uuid';
import {StackActions} from '@react-navigation/native';
// resource
import {stringToObj, _readData, _setData, _clearData} from '@utils/local.data';
// components
import ScreenContainer from '@components/ScreenContainer';
import {IconView} from '@components/IconView';

export default ({navigation, route}) => {
  const [title, onChangeTodoTitle] = React.useState('');
  const [content, onChangeTodoContent] = React.useState('');

  // 修改标题信息
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.6}
          onPress={addTask}>
          <IconView
            name="checkmark-circle-outline"
            size={24}
            color="#ffffff"></IconView>
        </TouchableOpacity>
      ),
    });
    // 注意此处需要根据输入项重绘顶部导航，一般建议将
  }, [navigation, title, content]);

  const emptyInputText = () => {
    // 清空数据
    onChangeTodoTitle('');
    onChangeTodoContent('');
    // 回到上一级
    navigation.dispatch(
      StackActions.replace('Entry', {
        reload: true,
      }),
    );
  };

  // 添加任务
  const addTask = async () => {
    if (title === '' || content === '') {
      ToastAndroid.show('请输入任务名称或内容', ToastAndroid.SHORT);
    } else {
      try {
        //  先获取任务列表，不存在时，生成对应的任务列表信息
        const _prevTasksList = await _readData('@TaskList').then(res =>
          res ? stringToObj(res) : [],
        );
        const task = {
          id: uuid.v1(),
          done: false,
          title,
          content,
        };
        _prevTasksList.unshift(task);
        await _setData('@TaskList', _prevTasksList);
        ToastAndroid.show('任务添加成功', ToastAndroid.SHORT);
        emptyInputText(0);
      } catch (err) {
        ToastAndroid.show('任务添加失败', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.modalView}>
        <TextInput
          style={styles.todoName}
          placeholder="请输入任务名称"
          maxLength={50}
          onChangeText={text => onChangeTodoTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.todoContent}
          placeholder="请输入任务内容"
          multiline={true}
          onChangeText={text => onChangeTodoContent(text)}
          value={content}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: '100%',
    margin: 0,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
  todoName: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#f1f3f6',
  },
  todoContent: {
    width: '100%',
    height: 260,
    borderRadius: 6,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f1f3f6',
  },
  addButton: {
    color: '#ffffff',
  },
});
