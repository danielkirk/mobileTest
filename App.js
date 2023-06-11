import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useWindowDimensions, Text, View, SafeAreaView} from 'react-native';

//View -> UIView
export default function App() {
const deviceDimensions = useWindowDimensions();

console.log(deviceDimensions);

  return (
    <SafeAreaView style={styles.container}>
    <View style={{
      backgroundColor: "dodgerblue",
      width: "50%",
      height: "15%"
    }}>
    </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
