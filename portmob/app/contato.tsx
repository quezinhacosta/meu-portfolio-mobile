import { View, Text, Pressable, Linking } from "react-native";

export default function Contato() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff0f6",
        gap: 15,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#ff4fa3" }}>
        Contato
      </Text>

      <Pressable onPress={() => Linking.openURL("https://github.com/SEU_GITHUB")}>
        <Text style={{ color: "#a855f7" }}>GitHub</Text>
      </Pressable>

      <Pressable onPress={() => Linking.openURL("https://linkedin.com/in/SEU_LINKEDIN")}>
        <Text style={{ color: "#a855f7" }}>LinkedIn</Text>
      </Pressable>
    </View>
  );
}