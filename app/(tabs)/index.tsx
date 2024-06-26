import React from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function Portada() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/cajaHerramientas.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Couteau App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#2f6682",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 30,
  },
});
