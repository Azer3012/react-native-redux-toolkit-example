import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApiTodos, Counter, TodoList } from '../screen'

const Stack=createNativeStackNavigator()
const Stacks= () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="counter" component={Counter}/>
        <Stack.Screen name="todo" component={TodoList}/>
        <Stack.Screen name="apiTodos" component={ApiTodos}/>
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})