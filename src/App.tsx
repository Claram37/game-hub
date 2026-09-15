import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });
  return (
    <div className="p-3">
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <div className="d-flex">
        <aside className="sidebar d-none d-lg-block">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </aside>
        <main className="flex-grow-1">
          <div className="ps-2">
            <GameHeading
              selectedGenre={gameQuery.genre}
              selectedPlatform={gameQuery.platform}
            />
            <div className="d-flex mb-4">
              <div className="me-4">
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </div>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>
          </div>
          <GameGrid gameQuery={gameQuery} />
        </main>
      </div>
    </div>
  );
}

export default App;
