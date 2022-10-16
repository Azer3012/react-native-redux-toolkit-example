import {
    ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodoAsync, getTodoAsync} from '../../redux/fetchSlice';

const ApiTodos = () => {
  const todos = useSelector(state => state.db.todos);
  const isLoading=useSelector(state=>state.db.isLoading)

  const dispatch = useDispatch();
  const [text,setText]=useState()

  useEffect(() => {
    dispatch(getTodoAsync());
  }, []);

  const renderItem = ({item}) => {
    return (
      <Text style={{marginBottom: 10, padding: 10, borderWidth: 1}}>
        {item.title}
      </Text>
    );
  };

  const handleSubmit=async()=>{
   await dispatch(addTodoAsync({title:text}))
  }
  return (
    <View>
      <TextInput
        placeholder="add todo"
        value={text}
        onChangeText={setText}
        style={{
          height: 40,
          borderWidth: 1,
          marginHorizontal: 16,
          paddingLeft: 10,
          marginVertical:10
        }}
      />
      <TouchableOpacity
      onPress={handleSubmit}
        style={{
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          marginHorizontal: 16,
          marginVertical:10,
          backgroundColor:'green'
        }}>
        {!isLoading?<Text >Add</Text>:<ActivityIndicator size={15} color={"white"}/>}
      </TouchableOpacity>
      <Text style={{textAlign: 'center',marginVertical:10}}>ApiTodos</Text>
      <FlatList
        style={{marginHorizontal: 16}}
        data={todos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        
      />
    </View>
  );
};

export default ApiTodos;

const styles = StyleSheet.create({});
