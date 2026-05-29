import { View, Text, Pressable, Alert } from "react-native";
import { useState } from "react";

export default function Jogo() {
  const [score, setScore] = useState(0);

  function clicar() {
    const novo = score + 1;
    setScore(novo);

    if (novo === 10) {
      Alert.alert("Você venceu 💗", "Parabéns!");
      setScore(0);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff0f6",
      }}
    >
      <Text style={{ fontSize: 20 }}>Clique até 10</Text>

      <Text
        style={{
          fontSize: 40,
          color: "#ff4fa3",
          marginVertical: 20,
        }}
      >
        {score}
      </Text>

      <Pressable
        onPress={clicar}
        style={{
          backgroundColor: "#ff4fa3",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>Clicar</Text>
      </Pressable>
    </View>
  );
}