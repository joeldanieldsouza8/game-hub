import { List, ListItem, HStack, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner size="xl" thickness="4px" speed="0.65s" />;

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
            <Text fontSize="md">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
