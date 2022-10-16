import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../redux/counterSlice';
import {useNavigation} from '@react-navigation/native';

const NumberProcess = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  const navigation = useNavigation();

  console.log(count);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(decrement());
          }}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={{marginHorizontal: 10}}>{count}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(increment());
          }}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(incrementByAmount(5));
          }}>
          <Text>+5</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', marginTop: 40}}
        onPress={() => navigation.navigate('todo')}>
        <Text>Whatch to list screen</Text>
      </TouchableOpacity>
    </>
  );
};

export default NumberProcess;

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  container: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
