import { View, Text, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ChildComponentA from "@/components/ChildComponentA";
import ChildComponentB from "@/components/ChildComponentB";
import ChildComponentC from "@/components/ChildComponentC";

export default function HomeScreen() {
  console.log("HomeScreen Rerender");

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          backgroundColor: "black",
          padding: 60,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontSize: 30 }}>
            Zustand Test
          </Text>

          <HelloWave />
        </View>

        <ChildComponentA />
        <ChildComponentB />
        <ChildComponentC />
      </View>
    </ScrollView>
  );
}
