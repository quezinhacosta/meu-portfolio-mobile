import { View, Text } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff0f6",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "#ff4fa3" }}>
        Oi, eu sou Quezia Costa
      </Text>

      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Estudante de Ciência da Computação (atualmente no quinto período)
      </Text>

      <Text style={{ textAlign: "center" }}>
        Estagiária no Centro de Inteligência Artificial da FASA
      </Text>

      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Estudante de iniciação cientifica 
      </Text>
    </View>
  );
}