import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import Video from "react-native-video";

export default function Portada() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trailer de One Piece</Text>
      {Platform.OS === "web" ? (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JoO7TGG2Kms?si=LkEvBiycuVCYKDpn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={styles.video}
        ></iframe>
      ) : Platform.OS === "ios" || Platform.OS === "android" ? (
        <YoutubeIframe
          width={300}
          height={200}
          play={false}
          videoId="JoO7TGG2Kms" // Reemplaza con el ID del video de YouTube
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
