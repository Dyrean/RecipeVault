import React, { PropsWithChildren } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

type Props = PropsWithChildren<{}>;

export const SafeArea = ({ children }: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});
