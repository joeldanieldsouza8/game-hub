import useData from "./useData";
import { Platform } from "./useGames";


function usePlatforms() {
  const { data, error, isLoading } = useData<Platform>(
    "platforms/lists/parents"
  );

  return { data, error, isLoading };
}

export default usePlatforms;
