import { useAppStore } from "@/store";
import Box from "./Box";
import Txt from "./Txt";
import Button from "./Button";

export default function ChildComponentA() {
  const bees = useAppStore((state) => state.bees);
  const setBees = useAppStore((state) => state.setBees);
  const setTwoBeesByBears = useAppStore((state) => state.setTwoBeesByBears);
  const isBearsHigherThanBees = useAppStore(
    (state) => state.bears > state.bees,
  );

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

      <Txt>Got {bees} bees</Txt>

      <Txt>
        {`There is more ${isBearsHigherThanBees ? "bears than bees" : "bees than bears"}`}
      </Txt>

      <Button onPress={() => setBees(bees + 1)}>Add one bee</Button>

      <Button onPress={() => setTwoBeesByBears()}>Set two bees by bears</Button>
    </Box>
  );
}
