import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  // 1. Use the useColorMode hook to access the color mode object and function
  // 2. Destructure the color mode and the toggleColorMode function from the hook
  const { colorMode, toggleColorMode } = useColorMode(); //

  return (
    <HStack spacing={4} justifyContent="space-between">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
