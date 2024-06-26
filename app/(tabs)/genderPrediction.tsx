import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";

export default function genderPrediction() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");

  const predictGender = async () => {
    try {
      const response = await axios.get(
        `https://api.genderize.io/?name=${name}`
      );
      const { gender } = response.data;
      setGender(gender);

      // Set color based on gender
      if (gender === "male") {
        setColor("blue");
        setGender("Masculino");
      } else if (gender === "female") {
        setColor("pink");
        setGender("Femenino");
      } else {
        setColor("gray");
      }
    } catch (error) {
      console.error("Error fetching gender prediction:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predecir Género</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce el nombre..."
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Predecir" onPress={predictGender} />
      {gender ? (
        <View style={[styles.genderBox, { backgroundColor: color }]}>
          <Text style={styles.genderText}>{gender}</Text>
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
  genderBox: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  genderText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
