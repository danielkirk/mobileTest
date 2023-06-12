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
      justifyContent: "center", //main axis
      alignItems: "center", // secondary axis
      alignContent: "center", // allows for adjustment of items when they wrap to next line/overflow
      flexWrap: "wrap" //required for alignContent
    }}>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "pink",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "grey",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "greenyellow",
        width: 100,
        height: 100
      }}/>
    </View>
  );
}

