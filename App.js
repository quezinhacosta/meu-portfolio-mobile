import { View, Text, ScrollView, Pressable, Linking, Animated } from "react-native";

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff0f6" }}
      contentContainerStyle={{ padding: 20, paddingBottom: 60 }}
    >
      {/* HEADER CARD */}
      <View
        style={{
          alignItems: "center",
          marginTop: 40,
          backgroundColor: "#ffffff",
          padding: 22,
          borderRadius: 25,
          shadowColor: "#ff4fa3",
          shadowOpacity: 0.25,
          shadowRadius: 15,
          elevation: 6,
          borderWidth: 1,
          borderColor: "#ffd1e8",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#ff4fa3",
            textAlign: "center",
            letterSpacing: 0.5,
          }}
        >
          Bem-vindo ao meu portfolio, meu nome é Quezia Costa
        </Text>

        <View style={{ marginTop: 12, gap: 6 }}>
          <Text style={{ textAlign: "center", color: "#444" }}>
            Estudante de Ciência da Computação (5º período)
          </Text>

          <Text style={{ textAlign: "center", color: "#444" }}>
            Estagiária no Centro de Inteligência Artificial da FASA
          </Text>

          <Text style={{ textAlign: "center", color: "#444" }}>
            Iniciação Científica - focado no desenvolvimento de aplicativos para crianças com dislexia
          </Text>
        </View>
      </View>

      {/* SOBRE */}
      <View
        style={{
          marginTop: 25,
          backgroundColor: "#fff",
          padding: 18,
          borderRadius: 20,
          shadowColor: "#a855f7",
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 22, color: "#ff4fa3", fontWeight: "bold" }}>
          Sobre mim
        </Text>

        <Text style={{ marginTop: 10, color: "#333", lineHeight: 20 }}>
          Sou estudante de Ciência da Computação e atuo como estagiária em IA.
          Tenho interesse em desenvolvimento mobile, inteligência artificial e
          projetos práticos.
        </Text>
      </View>

      {/* HABILIDADES */}
      <View
        style={{
          marginTop: 25,
          backgroundColor: "#fff",
          padding: 18,
          borderRadius: 20,
          shadowColor: "#a855f7",
          shadowOpacity: 0.12,
          shadowRadius: 10,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 22, color: "#a855f7", fontWeight: "bold" }}>
          Habilidades
        </Text>

        <View style={{ marginTop: 10, gap: 6 }}>
          {[
            "React Native",
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "Git ",
            "LLM",
          ].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff0f6",
                padding: 10,
                borderRadius: 12,
                borderLeftWidth: 4,
                borderLeftColor: "#ff4fa3",
              }}
            >
              <Text style={{ color: "#333" }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* PROJETOS */}
      <View
        style={{
          marginTop: 25,
          backgroundColor: "#fff",
          padding: 18,
          borderRadius: 20,
          shadowColor: "#ff4fa3",
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 22, color: "#ff4fa3", fontWeight: "bold" }}>
          Principais projetos
        </Text>

        <View style={{ marginTop: 10, gap: 10 }}>
          {[
            "Pig Me Up (controle financeiro)",
            "Derivoz - Aplicativo voltado para crianças com dislexia",
            "StonksViewer - Auxiliador no planejamento financeiro pessoal, feito para a disciplina de banco de dados",
            "Jarvis - Auxiliador de estudos. Se baseia em fazer exercicios sobre assuntos de preferencia do usuário.",
          ].map((item, index) => (
            <View
              key={index}
              style={{
                padding: 12,
                borderRadius: 14,
                backgroundColor: "#fff0f6",
                borderWidth: 1,
                borderColor: "#ffd1e8",
              }}
            >
              <Text style={{ color: "#333" }}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CONTATO */}
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 20,
          shadowColor: "#a855f7",
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 4,
        }}
      >
        <Text style={{ fontSize: 22, color: "#a855f7", fontWeight: "bold" }}>
          Contato
        </Text>

        <Pressable
          onPress={() => Linking.openURL("https://github.com/quezinhacosta")}
          style={{
            marginTop: 12,
            backgroundColor: "#ff4fa3",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Github</Text>
        </Pressable>

        <Pressable
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/quezia-costa-5195342b3/")
          }
          style={{
            marginTop: 10,
            backgroundColor: "#a855f7",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>LinkedIn</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}