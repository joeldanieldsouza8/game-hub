// import useData from "./useData";
// import { Platform } from "./useGames";

import platforms from "../data/platforms";

// This sends a fetch request tp the API each time the app loads even though the data doesn't change
/*
function usePlatforms() {
  const { data, error, isLoading } = useData<Platform>(
    "platforms/lists/parents"
  );

  return { data, error, isLoading };
}
*/

// This sends a fetch request to the API only when the app loads and the data changes
function usePlatforms() {
  const data = { data: platforms, isLoading: false, error: null }; // The reason we return an object is because we want to minimize the impact of this change on the consumers of this hook.
  return data;
}

export default usePlatforms;
