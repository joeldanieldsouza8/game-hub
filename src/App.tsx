import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null; // Add the selected genre to the props
  platform: Platform | null; // Add the selected platform to the props
  sortOrder: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // Add state for the selected genre
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // ); // Add state for the selected platform

  // Replace the above with this:
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // Add state for the selected genre and platform

  function handleGenreSelect(genre: Genre) {
    // setSelectedGenre(genre);
    // console.log(genre); // debug

    // Replace the above with this:
    // Here we use the spread operator to copy the existing state and then update the genre
    setGameQuery({ ...gameQuery, genre }); // Update the state with the new genre
  }

  function handlePlatformSelect(platform: Platform) {
    // setSelectedPlatform(platform);
    // console.log(platform); // debug

    // Replace the above with this:
    // Here we use the spread operator to copy the existing state and then update the platform
    setGameQuery({ ...gameQuery, platform }); // Update the state with the new platform
  }

  function handleSortSelect(sortOrder: string) {
    setGameQuery({ ...gameQuery, sortOrder }); // Update the state with the new platform
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav nav" "aside main main"`, // Updated template areas
      }}
      templateColumns={{ base: "1fr", lg: "200px" }} // Define the width of the aside area
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" paddingX={3}>
        <Show above="lg">
          <GenreList
            onSelectGenre={handleGenreSelect}
            selectedGenre={gameQuery.genre} // Pass the selected genre to the component
          />
        </Show>
      </GridItem>
      <GridItem area="main">
        <HStack spacing={5} mb={5}>
          <PlatformSelector
            onSelectPlatform={handlePlatformSelect}
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector onSelectSort={handleSortSelect} selectedSort={gameQuery.sortOrder} />
        </HStack>
        <GameGrid
          // selectedGenre={gameQuery.genre}
          // selectedPlatform={gameQuery.platform}
          gameQuery={gameQuery} // Pass the selected genre and platform to the component
        />
      </GridItem>
    </Grid>
  );
}

export default App;
