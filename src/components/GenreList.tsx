import {
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: GenreListProps) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner size="xl" thickness="4px" speed="0.65s" />;

  function handleGenreClick(genre: Genre) {
    onSelectGenre(genre); // Call the callback prop
    console.log(genre); // debug
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack align="center">
            <Image
              boxSize="32px"
              borderRadius="full"
              src={getCroppedUrl(genre.image_background)} // Make sure you're using the correct property
              alt={genre.name}
              mr={2} // Add some right margin to the image
            />
            <Button
              fontSize="md"
              variant="link"
              onClick={() => handleGenreClick(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
