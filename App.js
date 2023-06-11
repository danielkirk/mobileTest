import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//View -> UIView
export default function App() {

  console.log("App executed!", Datetime.now());
  return (
    <View style={styles.container}>
      <Text>I love you baby!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
