import React, { useState } from "react";
import YoutubeIframe from "react-native-youtube-iframe";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Platform,
} from "react-native";

interface IMomento {
  id: number;
  titulo: string;
  detalles: string;
  fotoUrl: string;
  videoUrl: string;
  videoId: string;
}

const momentos: IMomento[] = [
  {
    id: 1,
    titulo: "Muerte de Barbablanca",
    detalles:
      "La batalla en Marineford es uno de los momentos más épicos de One Piece. Barbablanca, el hombre más fuerte del mundo, se sacrifica en esta intensa batalla.",
    fotoUrl: "https://i.ytimg.com/vi/7XaWLi5oC1E/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/rBub-Vd5ZR0?si=ovR9ysHRQFiq-WAe",
    videoId: "rBub-Vd5ZR0",
  },
  {
    id: 2,
    titulo: "Despertar del Gear Fifth",
    detalles:
      "Luffy despierta una nueva transformación, el Gear Fifth, durante su batalla contra Kaido, mostrando un poder nunca antes visto.",
    fotoUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5714e74-8ddc-4547-9494-45410d78e802/dg03ah4-c4134d93-0017-4e1a-bc3f-494985f18319.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1NzE0ZTc0LThkZGMtNDU0Ny05NDk0LTQ1NDEwZDc4ZTgwMlwvZGcwM2FoNC1jNDEzNGQ5My0wMDE3LTRlMWEtYmMzZi00OTQ5ODVmMTgzMTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9kPZCBKJO_yREoSMcLzE8Sqnp-ikQqsEQjwTUl9ykao",
    videoUrl: "https://www.youtube.com/embed/tKRNOM0VsSc?si=MzQZxQPwQwzI7om3",
    videoId: "tKRNOM0VsSc",
  },
  {
    id: 3,
    titulo: "Gold Roger llega a la última isla",
    detalles:
      "Gold Roger, el Rey de los Piratas, llega a Laugh Tale, la última isla del Grand Line, y descubre el legendario One Piece.",
    fotoUrl: "https://i.ytimg.com/vi/eISeERPgmZ4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/UgBI1F4eXlI?si=bgq_gWpEVFmHmSeq",
    videoId: "UgBI1F4eXlI",
  },
];

export default function Momentos() {
  const [momentoSeleccionado, setMomentoSeleccionado] =
    useState<IMomento | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Mis Momentos Favoritos</Text>
        <View style={styles.momentosContainer}>
          {momentos.map((momento) => (
            <TouchableOpacity
              key={momento.id}
              style={styles.momentoCard}
              onPress={() => setMomentoSeleccionado(momento)}
            >
              <Image
                source={{ uri: momento.fotoUrl }}
                style={styles.momentoImage}
              />
              <Text style={styles.momentoTitle}>{momento.titulo}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {momentoSeleccionado && (
          <Modal visible={true} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>
                  {momentoSeleccionado.titulo}
                </Text>
                <View style={styles.modalDetailsContainer}>
                  <Text style={styles.modalDetails}>
                    {momentoSeleccionado.detalles}
                  </Text>
                  {Platform.OS === "web" ? (
                    <iframe
                      width="560"
                      height="315"
                      src={momentoSeleccionado.videoUrl}
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
                      height={300}
                      play={false}
                      videoId={momentoSeleccionado.videoId} // Reemplaza con el ID del video de YouTube
                    />
                  ) : (
                    <Text>
                      El video de YouTube no es soportado en esta plataforma.
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={() => setMomentoSeleccionado(null)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 26,
    textAlign: "center",
    color: "#2f6682",
  },
  momentosContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  momentoCard: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  momentoImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  momentoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2f6682",
  },
  modalDetailsContainer: {
    width: "100%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  modalDetails: {
    marginBottom: 30,
    textAlign: "justify",
    fontSize: 16,
    color: "#555",
    margin: 10,
    width: "90%",
  },
  video: {
    width: "95%",
    height: 200,
    margin: 10,
    borderRadius: 10,
  },
  closeButton: {
    backgroundColor: "#2f6682",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
  },
});
