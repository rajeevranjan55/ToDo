import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from '../NoData/styles';
 const Todo=({navigation})=> {
  return (
    <View style={styles.mainview}>
      <Text>To Do Screen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("addtodo")}>
        <Text style={styles.txt}>NO data screen</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Todo;