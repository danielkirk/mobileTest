import React from 'react'
import { View} from 'react-native';

//View -> UIView
export default function App() {

console.log(deviceDimensions);

  return (
    <View style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end"
    }}>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 300
      }}/>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 200
      }}/>
      <View style={{
        backgroundColor: "pink",
        width: 100,
        height: 100
      }}/>
    </View>
  );
}

