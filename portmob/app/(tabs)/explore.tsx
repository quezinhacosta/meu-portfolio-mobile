import { View, Text } from "react-native";

export default function Sobre() {
  return (
    <View style={{ flex: 1, padding: 20, gap: 10 }}>
      
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Sobre mim
      </Text>

      <Text>
        Sou estudante de Ciências da Computação e estagiária no Centro de Inteligência Artificial da FASA.
      </Text>

      <Text>
        Também atuo com Iniciação Científica, focando em IA aplicada e desenvolvimento de sistemas inteligentes.
      </Text>

      <Text style={{ fontWeight: "bold", marginTop: 10 }}>
        Habilidades:
      </Text>

      <Text>
        - JavaScript / TypeScript{"\n"}
        - React Native / Expo{"\n"}
        - Python{"\n"}
        - Java (POO){"\n"}
        - Git / GitHub{"\n"}
        - Inteligência Artificial (básico)
      </Text>

    </View>
  );
}