import { useAppStore } from "@/store";
import { View, Text, TouchableOpacity } from "react-native";

export default function ChildComponentB() {
  const isBearsHigherThanBees = useAppStore(
    (state) => state.bears > state.bees,
  );
  const bees = useAppStore((state) => state.bees);
  const setBees = useAppStore((state) => state.setBees);
  const setTwoBeesByBears = useAppStore((state) => state.setTwoBeesByBears);

  console.log("ChildComponentB");

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
        ChildComponentB
      </Text>

      <Text style={{ color: "white", textAlign: "center", marginBottom: 10 }}>
        Got {bees} bees
      </Text>

      <Text style={{ color: "white", textAlign: "center", marginBottom: 10 }}>
        {`There is more ${isBearsHigherThanBees ? "bears than bees" : "bees than bears"}`}
      </Text>

      <TouchableOpacity
        onPress={() => setBees(bees + 1)}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#666",
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Add one bee</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTwoBeesByBears()}
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 8,
          padding: 10,
          backgroundColor: "#666",
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Set two bees by bears
        </Text>
      </TouchableOpacity>
    </View>
  );
}
