import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";

export default function agePrediction() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const predictAge = async () => {
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const { age } = response.data;
      setAge(age);
    } catch (error) {
      console.error("Error fetching age prediction:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predecir Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce un nombre..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Predecir" onPress={predictAge} />
      {age ? (
        <View style={[styles.ageBox, { backgroundColor: "gray" }]}>
          <Text style={styles.ageText}>{age} años</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#2f6682",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: "70%",
    borderRadius: 10,
  },
  ageBox: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  ageText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
