import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Txt from "./Txt";

export default function Button({
  children,
  style,
  ...rest
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={{
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#666",
        ...style,
      }}
    >
      <Txt style={{ marginBottom: 0 }}>{children}</Txt>
    </TouchableOpacity>
  );
}
