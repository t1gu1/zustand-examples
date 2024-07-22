import { useAppStore } from "@/store";
import Box from "./Box";
import Txt from "./Txt";
import Button from "./Button";

export default function ChildComponentA() {
  const bears = useAppStore((state) => state.bears);
  const setBears = useAppStore((state) => state.setBears);

  console.log("ChildComponentA");

  return (
    <Box>
      <Txt
        style={{
          fontSize: 25,
          marginBottom: 20,
        }}
      >
        ChildComponentA
      </Txt>

      <Txt>Got {bears} bears</Txt>

      <Button onPress={() => setBears(bears + 1)}>Add one bear</Button>
    </Box>
  );
}
