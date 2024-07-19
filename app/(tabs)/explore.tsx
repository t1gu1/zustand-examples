import { View, Text } from "react-native";

export default function TabTwoScreen() {
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
      <Text style={{ color: "white" }}>Explore Screen</Text>
    </View>
  );
}
