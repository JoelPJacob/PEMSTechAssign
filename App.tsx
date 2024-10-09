import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Routes />
    </SafeAreaProvider>
  );
}

export default App;