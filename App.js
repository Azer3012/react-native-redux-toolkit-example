import {StyleSheet} from 'react-native';
import React from 'react';


import {Provider} from 'react-redux';
import { store } from './app/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './app/stacks/Stack'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
