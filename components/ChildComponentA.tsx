import { useAppStore } from "@/store";
import { View, Text, TouchableOpacity } from "react-native";

export default function ChildComponentA() {
  const bears = useAppStore((state) => state.bears);
  const setBears = useAppStore((state) => state.setBears);

  console.log("ChildComponentA");

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
        ChildComponentA
      </Text>

      <Text style={{ color: "white", textAlign: "center", marginBottom: 10 }}>
        Got {bears} bears
      </Text>

      <TouchableOpacity
        onPress={() => setBears(bears + 1)}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#666",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Add one bear
        </Text>
      </TouchableOpacity>
    </View>
  );
}
