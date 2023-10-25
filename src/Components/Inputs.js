import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../styles/colors";

const Input = () => {
  const[input,setInput]=useState({
    name:"",
    email:"",
    phonenumber:"",
    description:""
  });
 
  const handleInput = (key, value) => {
    setInput({ ...input, [key]: value });
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={input.name}
        onChangeText={(text) => handleInput("name",text)}
        placeholder="Enter Your Name"
        placeholderTextColor={colors.grey}
      />
      <TextInput
        style={styles.input}
        value={input.email}
        onChangeText={(text) => handleInput("email",text)}
        placeholder="Enter Your Email"
        placeholderTextColor={colors.grey}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={input.phone}
        onChangeText={(text) => handleInput("phone",text)}
        placeholder="Enter Your Phone Nuumber"
        placeholderTextColor={colors.grey}
        maxLength={10}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={input.description}
        onChangeText={(text) => handleInput("description",text)}
        placeholder="Enter Description"
        placeholderTextColor={colors.grey}
        multiline={true}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    color: "grey",
    borderRadius:8,
    backgroundColor:"lightgrey",
    
  },
});
