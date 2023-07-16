import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/Header';
import {taskData} from './components/Tasklist/Tasksdata';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';

const App = () => {
  const [tasks, setTasks] = useState(taskData);

  return (
    <View>
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Text style={styles.text}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <Task item={item} setTasks={setTasks} tasks={tasks} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default App;
