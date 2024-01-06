import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: PlatformIconListProps) {
  // name: "Xbox",
  // slug: "xbox",
  const platformIcons: Record<string, IconType> = {
    Xbox: FaXbox,
    PlayStation: FaPlaystation,
    PC: FaWindows,
    Linux: FaLinux,
    macOS: FaApple,
    Nintendo: SiNintendo,
    iOS: MdPhoneIphone,
    Android: MdPhoneIphone,
    Web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={platformIcons[platform.name]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
