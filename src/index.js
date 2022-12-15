import React, { useEffect } from 'react';
import { LogBox } from 'react-native';

import AppNavigator from './AppNavigator.js';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    console.log(1)
  }, []);

  return (
    <AppNavigator />
  );
};

export default App;