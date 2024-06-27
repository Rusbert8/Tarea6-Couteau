import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const API_KEY = "gzry6x6hugaykocofr97iyd6ibbqn8h76zstwrp9";
const PLACE_ID = "santo-domingo";

interface IWind {
  speed: number;
  angle: number;
  dir: string;
}

interface ICurrentWeather {
  temperature: number;
  wind: IWind;
  precipitation: {
    total: number;
    type: string;
  };
  cloud_cover: number;
}

interface IWeatherResponse {
  timezone: string;
  units: string;
  current: ICurrentWeather | null;
}

export default function Weather() {
  const [weather, setWeather] = useState<IWeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get<IWeatherResponse>(
          `https://www.meteosource.com/api/v1/free/point?place_id=${PLACE_ID}&sections=current&timezone=UTC&language=en&units=metric&key=${API_KEY}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error || !weather?.current) {
    return (
      <Text style={styles.errorText}>
        Error al cargar el clima o datos no disponibles.
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima de Hoy en Santo Domingo</Text>
      {weather.current && (
        <View style={styles.currentWeatherContainer}>
          <Text style={styles.label}>Temperatura:</Text>
          <Text style={styles.currentWeatherText}>
            {weather.current.temperature}°C
          </Text>
          <Text style={styles.label}>Viento:</Text>
          <Text style={styles.currentWeatherText}>
            {weather.current.wind.speed} m/s {weather.current.wind.dir}
          </Text>
          <Text style={styles.label}>Cobertura de Nubes:</Text>
          <Text style={styles.currentWeatherText}>
            {weather.current.cloud_cover}%
          </Text>
          {weather.current.precipitation.total != 0.0 && (
            <>
              <Text style={styles.label}>Tipo de Precipitación:</Text>
              <Text style={styles.currentWeatherText}>
                {weather.current.precipitation.type}
              </Text>
            </>
          )}
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
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 26,
    textAlign: "center",
    color: "#2f6682",
  },
  currentWeatherContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  currentWeatherText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
