import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./pages/Landing/Landing";
import Flexbox from "./pages/Flexbox/Flexbox";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Landing />
      <Flexbox />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
//
