import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { NativeBaseProvider, INativebaseConfig } from 'native-base';
import { RecipesScreen } from './src/screens/recipes';

export default function App() {
  return (
    <>
      <NativeBaseProvider config={config}>
        <RecipesScreen />
      </NativeBaseProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// ignore the INativebaseConfig if you are not using typescript

const config: INativebaseConfig = {
  // rest of the config keys like dependencies can go here
  strictMode: 'warn',
};
