import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchQuery: string) => void; // This is the function that will be called when the form is submitted
}

function NavBar({ onSearch }: SearchInputProps) {
  return (
    <HStack spacing={4} width="100%">
      <Image src={logo} alt="logo" boxSize="60px" p={2} borderRadius="xl" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
