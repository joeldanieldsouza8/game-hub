import { SimpleGrid, Text } from "@chakra-ui/react";
// import { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface GameGridProps {
  gameQuery: GameQuery; // Add the selected genre and platform to the props

  // selectedGenre: Genre | null; // Add the selected genre to the props
  // selectedPlatform: Platform | null; // Add the selected platform to the props
}

function GameGrid({ gameQuery }: GameGridProps) {
  // const { data, isLoading, error } = useGames(selectedGenre, selectedPlatform); // Pass the selected genre and platform to the hook
 
  // Replace the above with this:
  const { data, isLoading, error } = useGames(gameQuery); // Pass the selected genre and platform to the hook

  console.log(data); // debug

  // Define the number of skeletons you want to display
  const skeletonCount = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} // Responsive column setup
        spacing={3} // Spacing between items
        padding="" // Padding around the grid
        w="full" // Grid takes the full width
      >
        {skeletonCount.map((key) => (
          <GameCardContainer key={key}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} // Responsive column setup
      spacing={3} // Spacing between items
      padding="" // Padding around the grid
      w="full" // Grid takes the full width
    >
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
