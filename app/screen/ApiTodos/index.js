import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoAsync } from '../../redux/fetchSlice'

const ApiTodos = () => {
    const todos=useSelector(state=>state.db.todos)
    console.log(todos);
    const dispatch=useDispatch()

   useEffect(()=>{
    dispatch(getTodoAsync())
   },[])


   const renderItem=({item})=>{
    return <Text style={{marginBottom:10,padding:10,borderWidth:1}}>{item.title}</Text>
   }
  return (
    <View>
      <Text style={{textAlign:'center'}}>ApiTodos</Text>
      <FlatList style={{marginHorizontal:16}} data={todos} keyExtractor={item=>item.id} renderItem={renderItem}/>
    </View>
  )
}

export default ApiTodos

const styles = StyleSheet.create({})