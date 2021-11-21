/*
 * @Description: routes
 * @Author: zhangshuo
 * @Date: 2021-10-31 10:52:02
 * @LastEditors: zhangshuo
 */
import TasksScreen from '@screen/TabScreen/TasksScreen';
import TodosListScreen from '@screen/TabScreen/TodosListScreen';
import DoneListScreen from '@screen/TabScreen/DoneListScreen';
// main screen use lazy will appear flush, can add Suspense of react for user experience
// const AllTaskScreen = React.lazy(() => import('@screen/TabScreen/AllTaskScreen'));
// const TodosListScreen = React.lazy(() => import('@screen/TabScreen/TodosListScreen'));
// const DoneListScreen = React.lazy(() => import('@screen/TabScreen/DoneListScreen'));

// tabs data
const tabs = [
  {
    title: '所有任务',
    name: 'All',
    label: '所有',
    component: TasksScreen,
    icon: 'list',
  },
  {
    title: '当前任务',
    name: 'Todo',
    label: '未完',
    component: TodosListScreen,
    icon: 'key',
  },
  {
    title: '已完任务',
    name: 'Done',
    label: '已完',
    component: DoneListScreen,
    icon: 'flash',
  },
];

export default tabs;
