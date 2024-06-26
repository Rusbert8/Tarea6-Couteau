import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

export default function MiVida() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Importancia de One Piece{"\n"} en Mi Vida
      </Text>
      {Platform.OS === "web" ? (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0OGRorsmsHk?si=Fl-MWBLXdh5fsY2J" // Reemplaza con la URL del video de YouTube
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video player"
          style={styles.video}
        />
      ) : Platform.OS === "ios" || Platform.OS === "android" ? (
        <YoutubeIframe
          width={300}
          height={300}
          play={false}
          videoId={"0OGRorsmsHk"} // Reemplaza con el ID del video de YouTube
        />
      ) : (
        <Text>El video de YouTube no es soportado en esta plataforma.</Text>
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
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#2f6682",
  },
  video: {
    width: "90%",
    margin: 10,
    borderRadius: 10,
  },
});
