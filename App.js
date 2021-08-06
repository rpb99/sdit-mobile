/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ListPayments from './screens/ListPayments';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F8F7'}}>
      <ListPayments />
    </SafeAreaView>
  );
};

export default App;
