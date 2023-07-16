import React, {Dispatch, SetStateAction, useState} from 'react';
import {taskInterface} from '../interfaces/TaskInterface';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
interface Props {
  tasks: taskInterface[];
  setTasks: Dispatch<SetStateAction<taskInterface[]>>;
}
const AddTask: React.FC<Props> = ({tasks, setTasks}) => {
  const [task, setTask] = useState<string>('');

  const addTodo = () => {
    const newTodo: taskInterface = {
      id: tasks.length + 1,
      title: task,
      iscomplete: false,
    };
    setTasks([...tasks, newTodo]);
    Alert.alert('task added successfully');
    setTask('');
  };
  return (
    <View>
      <TextInput
        placeholder="enter task"
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)}
      />
      <Button title="add task" onPress={() => addTodo()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
  },
});
export default AddTask;
