import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React,{useState} from "react";

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');


  return (
    <>
    <ScrollView style={styles.container} keyboardDismissMode="on-drag">
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={'First Name'}
      />
      <TextInput
        style={styles.inputBox}
        value={lastName}
        onChangeText={onChangeLastName}
        placeholder={'Last Name'}
      />
      <TextInput
        style={styles.inputBox}
        value={message}
        onChangeText={onChangeMessage}
        placeholder={'write your message'}
      />
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
});
