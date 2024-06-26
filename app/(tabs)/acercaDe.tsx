import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export default function AcercaDe() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Acerca de One Piece</Text>
      <View
        style={[
          styles.infoContainer,
          width < 600 ? styles.infoContainerSmall : styles.infoContainerLarge,
        ]}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/11/59/bd/1159bd125b0670fbb5b7fecaddbd719d.jpg",
          }}
          style={[
            styles.image,
            width < 600 ? styles.imageSmall : styles.imageLarge,
          ]}
        />
        <View
          style={[
            styles.infoTextContainer,
            width < 600
              ? styles.infoTextContainerSmall
              : styles.infoTextContainerLarge,
          ]}
        >
          <Text style={styles.infoTitle}>Sinopsis:</Text>
          <Text style={styles.infoText}>
            One Piece es una serie de manga escrita e ilustrada por Eiichiro
            Oda. Narra las aventuras de Monkey D. Luffy, un joven que, inspirado
            por su ídolo pirata Shanks, comienza un viaje para encontrar el One
            Piece, el tesoro más grande del mundo y así convertirse en el Rey de
            los Piratas.
          </Text>
          <Text style={styles.infoTitle}>Cantidad de Arcos:</Text>
          <Text style={styles.infoText}>
            Actualmente, One Piece cuenta con más de 30 arcos diferentes.
          </Text>
          <Text style={styles.infoTitle}>Año de Lanzamiento:</Text>
          <Text style={styles.infoText}>
            El manga de One Piece comenzó a serializarse en julio de 1997.
          </Text>
          <Text style={styles.infoTitle}>Creador:</Text>
          <Text style={styles.infoText}>Eiichiro Oda</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 36,
    color: "#2f6682",
    textAlign: "center",
  },
  infoContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  infoContainerSmall: {
    flexDirection: "column",
    alignItems: "center",
  },
  infoContainerLarge: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTextContainer: {
    margin: 20,
    flexShrink: 1,
  },
  infoTextContainerSmall: {
    alignItems: "center",
    width: "100%",
  },
  infoTextContainerLarge: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  infoText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "justify",
  },
  image: {
    borderRadius: 10,
    marginBottom: 10,
  },
  imageSmall: {
    width: "90%",
    height: 150,
  },
  imageLarge: {
    width: "40%",
    height: "90%",
  },
});
