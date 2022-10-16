import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from './_components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, completed, removeTodo, selectorTodos} from '../../redux/todosSlice';

import IconTrash from 'react-native-vector-icons/Entypo';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  
  
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const renderItem = ({item}) => {

    return (
        <View style={{}}>
      <TouchableOpacity
        onPress={() => dispatch(completed(item.id))}
        style={styles.todo}>
        <Text style={[styles.todoText,item.completed && { textDecorationLine: 'line-through'}]}>{item.todo}</Text>

        
        <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
          <IconTrash name="trash" size={17} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
      </View>
    );
  };

  const addNewTodo = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder="Add todo"
          />
          <TouchableOpacity onPress={addNewTodo} style={styles.btn}>
            <Text>add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.flatList}
          data={todos}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 30,
  },
  content: {
    borderWidth: 1,
    minHeight: 50,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    width: '70%',
  },
  btn: {
    width: 50,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginTop: 16,
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    padding: 5,
  },
  todoText:{
    flex:1,
    
    

  }
});
