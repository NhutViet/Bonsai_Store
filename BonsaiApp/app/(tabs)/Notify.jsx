import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";

const Notify = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={"left"} title={"Thông báo"} />
      <View style={styles.content}></View>
    </SafeAreaView>
  );
};

export default Notify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
  },
});
