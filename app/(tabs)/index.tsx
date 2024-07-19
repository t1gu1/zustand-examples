import { View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  console.log("HomeScreen Rerender");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          marginBottom: 60,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 30 }}>
          Zustand Test
        </Text>

        <HelloWave />
      </View>

      <ChildComponentA />
    </View>
  );
}

export function ChildComponentA() {
  return (
    <View
      style={{
        backgroundColor: "gray",
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>
        ChildComponentA
      </Text>
    </View>
  );
}
