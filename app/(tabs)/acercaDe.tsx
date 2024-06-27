import { View, Text, StyleSheet, Image } from "react-native";

export default function acercaDe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Estudiante</Text>
      <Image
        source={require("../../assets/images/foto.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>Rusbert Antonelly Sánchez Rosario</Text>
      <Text style={styles.email}>20220323@itla.edu.do</Text>
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
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
  },
  email: {
    fontStyle: "italic",
  },
});
