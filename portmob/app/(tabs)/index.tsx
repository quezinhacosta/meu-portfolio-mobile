import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      
      <Text style={{ fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
        Olá, eu sou Quézia 
      </Text>

      <Text style={{ marginTop: 10, textAlign: "center" }}>
        Estudante de Ciência da Computação (5º período)
      </Text>

      <Text style={{ textAlign: "center" }}>
        Estagiária no Centro de Inteligência Artificial da FASA
      </Text>

      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Iniciação Científica em andamento
      </Text>

    </View>
  );
}