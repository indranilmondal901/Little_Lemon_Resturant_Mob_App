import * as React from "react";
import { StyleSheet,Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerText} numberOfLines={3}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    // backgroundColor: "#F4CE14",
    backgroundColor:"#EE9972",
    marginBottom: 10,
  },
  headerText: { padding: 40, fontSize: 30, color: "black", textAlign: "center" },
});


