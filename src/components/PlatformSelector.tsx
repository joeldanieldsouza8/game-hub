import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) {
  const { data, error } = usePlatforms();

  function handleSelectPlatform(platform: Platform) {
    onSelectPlatform(platform);
    console.log(platform); // debug
  }

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => handleSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
