import { useAppStore } from "@/store";
import { View, Text, TouchableOpacity } from "react-native";

export default function ChildComponentC() {
  const { uiLanguage, setUiLanguage, currentTheme, toggleTheme } = useAppStore(
    (state) => state.anotherExample,
  );

  console.log("ChildComponentC");

  return (
    <View
      style={{
        backgroundColor: "gray",
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 25,
          marginBottom: 20,
        }}
      >
        ChildComponentC
      </Text>

      <Text style={{ color: "white", textAlign: "center", marginBottom: 10 }}>
        Lang: {uiLanguage}
      </Text>

      <Text style={{ color: "white", textAlign: "center", marginBottom: 10 }}>
        Current theme: {currentTheme}
      </Text>

      <TouchableOpacity
        onPress={() => setUiLanguage(uiLanguage === "fr" ? "en" : "fr")}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#666",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Toogle UI language
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => toggleTheme()}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#666",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Toggle Current Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}
