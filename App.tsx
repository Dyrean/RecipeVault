import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RecipesScreen } from './src/screens/recipes';
import { SafeArea } from './src/components/SafeArea/safe-area.component';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  return (
    <>
      <TailwindProvider utilities={utilities}>
        <SafeArea>
          <RecipesScreen />
        </SafeArea>
      </TailwindProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
