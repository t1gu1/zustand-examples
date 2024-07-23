import { useAppStore } from "@/store";
import Box from "./Box";
import Txt from "./Txt";
import Button from "./Button";

export default function ChildComponentC() {
  const uiLanguage = useAppStore((state) => state.anotherExample.uiLanguage);
  const currentTheme = useAppStore(
    (state) => state.anotherExample.currentTheme,
  );
  const setUiLanguage = useAppStore((state) => state.setUiLanguage);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  // Don't do that
  // const { uiLanguage, currentTheme, setUiLanguage, toggleTheme } = useAppStore(
  //   (state) => ({
  //     uiLanguage: state.anotherExample.uiLanguage,
  //     currentTheme: state.anotherExample.currentTheme,
  //     setUiLanguage: state.setUiLanguage,
  //     toggleTheme: state.toggleTheme,
  //   }),
  // );

  console.log("ChildComponentC");

  return (
    <Box>
      <Txt
        style={{
          fontSize: 25,
          marginBottom: 20,
        }}
      >
        ChildComponentC
      </Txt>

      <Txt>Lang: {uiLanguage}</Txt>

      <Txt>Current theme: {currentTheme}</Txt>

      <Button onPress={() => setUiLanguage(uiLanguage === "fr" ? "en" : "fr")}>
        Toogle UI language
      </Button>

      <Button onPress={() => toggleTheme()}>Toggle Current Theme</Button>
    </Box>
  );
}
