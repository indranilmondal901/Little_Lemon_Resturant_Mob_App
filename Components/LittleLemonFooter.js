import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        All rights reserved to Little Lemon, 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#EE9972",
    marginBottom: 10,
  },
  footerText: { padding: 1, fontSize: 18, color: "black", textAlign: "center", fontStyle:"italic" },
});
