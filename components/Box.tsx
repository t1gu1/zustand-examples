import { View, ViewProps } from "react-native";

export default function Box({ children, style, ...rest }: ViewProps) {
  return (
    <View
      {...rest}
      style={{
        backgroundColor: "gray",
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
        minWidth: 400,
        ...style,
      }}
    >
      {children}
    </View>
  );
}
