import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import axios from "axios";

interface IUniversity {
  name: string;
  country: string;
  web_pages: string[];
  domains: string[];
}

export default function UniversityInfo() {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState<IUniversity[]>([]);
  const [searched, setSearched] = useState(false);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      setUniversities(response.data);
      setSearched(true);
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Universidades</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce un nombre de país en inglés..."
        value={country}
        onChangeText={(text) => setCountry(text)}
      />
      <Button title="Buscar" onPress={fetchUniversities} />
      <Text></Text>
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.universityBox}>
            <Text style={styles.universityName}>{item.name}</Text>
            <Text style={styles.universityCountry}>{item.country}</Text>
            {item.web_pages.map((url, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => Linking.openURL(url)}
              >
                <Text style={styles.universityWebPages}>{url}</Text>
              </TouchableOpacity>
            ))}
            <Text style={styles.universityDomains}>
              {item.domains.join(", ")}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          searched ? <Text>No se encontraron universidades.</Text> : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
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
    width: "90%",
    borderRadius: 10,
  },
  universityBox: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginTop: 30,
  },
  universityName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  universityCountry: {
    fontSize: 16,
  },
  universityWebPages: {
    fontSize: 14,
    color: "blue",
  },
  universityDomains: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
});
