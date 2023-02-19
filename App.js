import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Search from './src/components/Search';
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Search />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 30,
    marginRight:30
  },

});
