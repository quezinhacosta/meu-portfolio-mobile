import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#ff4fa3" },
        headerTintColor: "#fff",
        tabBarActiveTintColor: "#ff4fa3",
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Sobre" }} />
      <Tabs.Screen name="projetos" options={{ title: "Projetos" }} />
      <Tabs.Screen name="contato" options={{ title: "Contato" }} />
      <Tabs.Screen name="jogo" options={{ title: "Jogo 🎮" }} />
    </Tabs>
  );
}