import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface IPersonaje {
  nombre: string;
  detalles: string;
  fotoUrl: any; // Cambia el tipo de dato a any o a la ruta exacta de la imagen
}

export default function Personajes() {
  const [personaje, setPersonaje] = useState<IPersonaje | undefined>();

  function mostrarDetalles(opcion: string) {
    switch (opcion) {
      case "Luffy":
        setPersonaje({
          nombre: "Monkey D. Luffy",
          detalles: "Capitán de los Piratas del Sombrero de Paja.",
          fotoUrl: require("../../assets/images/luffy.jpg"), // Ruta absoluta a la imagen
        });
        break;
      case "Zoro":
        setPersonaje({
          nombre: "Roronoa Zoro",
          detalles: "Espadachín de los Piratas del Sombrero de Paja.",
          fotoUrl: require("../../assets/images/zoro.webp"), // Ruta absoluta a la imagen
        });
        break;
      case "Sanji":
        setPersonaje({
          nombre: "Vinsmoke Sanji",
          detalles: "Cocinero de los Piratas del Sombrero de Paja.",
          fotoUrl: require("../../assets/images/sanji.jpg"), // Ruta absoluta a la imagen
        });
        break;
      default:
        setPersonaje(undefined);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personajes de One Piece</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => mostrarDetalles("Luffy")}
      >
        <Text style={styles.buttonText}>Luffy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => mostrarDetalles("Zoro")}
      >
        <Text style={styles.buttonText}>Zoro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => mostrarDetalles("Sanji")}
      >
        <Text style={styles.buttonText}>Sanji</Text>
      </TouchableOpacity>
      {personaje && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsName}>{personaje.nombre}</Text>
          <Image
            source={personaje.fotoUrl} // Utiliza la ruta almacenada directamente
            style={styles.image}
          />
          <Text style={styles.detailsText}>{personaje.detalles}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 26,
    textAlign: "center",
    color: "#2f6682",
  },
  button: {
    backgroundColor: "#454545",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    maxWidth: 300,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  detailsName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 30,
  },
  detailsText: {
    fontSize: 16,
    textAlign: "center",
  },
});
