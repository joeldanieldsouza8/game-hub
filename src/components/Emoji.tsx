import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface EmojiInfo {
  src: string;
  alt: string;
  boxSize?: string;
}

interface EmojiMap {
  [key: string]: EmojiInfo;
}

const emojiMap: EmojiMap = {
  "3": { src: meh, alt: "meh", boxSize: "25px" },
  "4": { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  "5": { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

interface EmojiProps {
  rating: number;
}

function Emoji({ rating }: EmojiProps) {
  if (rating < 3) return null;

  const emoji = emojiMap[rating.toString()];

  if (!emoji) return null;

  //   return <Image src={emoji.src} alt={emoji.alt} boxSize={emoji.boxSize} />;
  return <Image {...emoji} marginTop={1} />;
}

export default Emoji;
