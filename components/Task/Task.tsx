/* eslint-disable prettier/prettier */
import React from 'react';
import {taskInterface} from '../interfaces/TaskInterface';
import {Alert, Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface Props {
  item: taskInterface;
  tasks: taskInterface[]
  setTasks: React.Dispatch<React.SetStateAction<taskInterface[]>>
}
const Task: React.FC<Props> = ({item,setTasks,tasks}) => {

    const onDelete = (id:number)=>{
      return setTasks(tasks.filter(t=>t.id !== id));
    };

  return (
    <TouchableOpacity style={styles.listitemsection}>
      <View style={styles.listitem} >
        <Text style={styles.listitemtitle}>{item.title}</Text>
        <Button
        title="delete"
        onPress={()=>{
            onDelete(item.id);
            Alert.alert('item delete successfully');
        }}
      />
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    listitemsection:{
        backgroundColor: '#f8f8f8',
        borderBottomColor: 'grey',
        borderBottomWidth:1,
        height:50,
        marginTop:5,
        padding:5,
        width:'100%',
    },
    listitem:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    listitemtitle:{
        fontSize:18,
        fontFamily:'sans-serif',
        fontWeight:'bold',
    },

});
export default Task;
