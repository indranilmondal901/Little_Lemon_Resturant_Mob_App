import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import local components
import LittleLemonHeader from "./Components/LittleLemonHeader";
import LittleLemonFooter from "./Components/LittleLemonFooter";
import WelcomeScreen from "./Components/WelcomeScreen";
import MenuItems from "./Components/MenuItems";
import FeedbackForm from "./Components/FeedbackForm";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        <FeedbackForm />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
