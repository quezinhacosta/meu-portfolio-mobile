import { View, Text } from "react-native";

export default function Sobre() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#fff0f6",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#ff4fa3" }}>
        Sobre mim
      </Text>

      <Text style={{ marginTop: 10 }}>
        Sou estudante de Ciência da Computação e estagiária no Centro de Inteligência Artificial da FASA.
      </Text>

      <Text style={{ marginTop: 10 }}>
        Atuo também com Iniciação Científica focada no desenvolvimento de aplicativos para crianças com dislexia 
      </Text>

      <Text
        style={{
          marginTop: 15,
          fontWeight: "bold",
          color: "#a855f7",
        }}
      >
        Habilidades:
      </Text>

      <Text>
        React Native / Expo{"\n"}
        JavaScript / TypeScript{"\n"}
        Python{"\n"}
        Java (POO){"\n"}
        Git / GitHub{"\n"}
        Inteligência Artificial básica
      </Text>
    </View>
  );
}