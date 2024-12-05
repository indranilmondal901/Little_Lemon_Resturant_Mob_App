{
  /* clearButtonMode="Always"  --->
        only present in IOS and default value is never.
        Not work in multiline field.
        It has 3 val: [ "Never", "Always","While Editing", "Less Editing"] 
        
      placeholder={"Phone Number"}
      keyboardType="phone-pad"
      onFocus={() => Alert.alert("You are now focuing on First Name Field")}
      onBlur={() => Alert.alert("First Name Field is blurred")}
        
  */
}

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>

        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={"First Name"}
          onFocus={() => Alert.alert("You are now focuing on First Name Field")}
          onBlur={() => Alert.alert("First Name Field is blurred")}
          clearButtonMode="Always"
        />
        <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={"Last Name"}
          clearButtonMode="Always"
        />
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={"Email"}
          clearButtonMode="Always"
        />
        <TextInput
          style={styles.inputBox}
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder={"Phone Number"}
          keyboardType="phone-pad"
          clearButtonMode="Always"
        />
        {/* <TextInput
          style={styles.inputBox}
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={"password"}
          secureTextEntry
        /> */}
        <TextInput
          style={styles.messageInputBox}
          value={message}
          onChangeText={onChangeMessage}
          placeholder={"write your message"}
          multiline={true}
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  messageInputBox: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
