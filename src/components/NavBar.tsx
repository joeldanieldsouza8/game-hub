import { HStack, Image, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack spacing={4} width="100%">
      <Image src={logo} alt="logo" boxSize="60px" p={2} borderRadius="xl" />
      <Spacer /> {/* This will push everything after it to the right */}
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
