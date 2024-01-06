import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data, isLoading, error } = useGames();

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
