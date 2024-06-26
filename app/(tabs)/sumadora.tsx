import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sumadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<number>(0);

  const sumar = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResultado(res);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumadora</Text>
      <div className="mb-3">
        <label htmlFor="inputNum1" className="form-label bold">
          Primer número:
        </label>
        <input
          type="number"
          className="form-control"
          id="inputNum1"
          value={num1}
          onChange={(e) => {
            setNum1(e.target.value);
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="inputNum2" className="form-label bold">
          Segundo número:
        </label>
        <input
          type="number"
          className="form-control"
          id="inputNum2"
          value={num2}
          onChange={(e) => {
            setNum2(e.target.value);
          }}
        ></input>
      </div>
      <button type="button" className="btn btn-primary" onClick={sumar}>
        Sumar
      </button>
      <br />
      {resultado !== 0 && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: "80%",
  },
  result: {
    marginTop: 16,
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
});
