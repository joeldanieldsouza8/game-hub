import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery; // Add the game query to the props
}

function GameHeading({ gameQuery }: GameHeadingProps) {
  const gameHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {gameHeading}
    </Heading>
  );
}

export default GameHeading;
