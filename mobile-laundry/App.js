import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Heading5, Heading6 } from "./components/Text"
import ListBelanja from "./components/ListBelanja";
import FormSignIn from "./components/FormSignIn";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <View>
      {/* <Text style={styles.textHeading1} onPress={() => setCounter(counter + 1)}>Count {counter}</Text>
      <Button title="Count" color={"green"} onPress={increment}/>
      <TouchableOpacity style={styles.btn} onPress={increment}>
        <Text style={styles.btn_text}>Count</Text>
      </TouchableOpacity> */}
      {/* <ListBelanja /> */}
      <FormSignIn />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  textHeading1: {
    fontSize: 20,
    color: "#000088",
  },
  btn: {
    border: 1,
    padding: 16,
    backgroundColor: "tomato",
  },
  btn_text: {
    color: "white"
  }

  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
