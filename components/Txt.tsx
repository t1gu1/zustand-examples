import { Text, TextProps, TextStyle } from "react-native";

export default function Txt({ children, style, ...rest }: TextProps) {
  return (
    <Text
      {...rest}
      style={{
        color: "white",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 20,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}
