import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";
import { useState } from "react";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  page: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: 1,
  } as GameQuery);
  return (
    <div className="p-3">
      <NavBar
        onSearch={(searchText) =>
          setGameQuery({ ...gameQuery, searchText, page: 1 })
        }
      />
      <div className="d-flex">
        <aside className="sidebar d-none d-lg-block">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id, page: 1 })
            }
          />
        </aside>
        <main className="flex-grow-1">
          <div className="ps-2">
            <GameHeading gameQuery={gameQuery} />
            <div className="d-flex mb-4">
              <div className="me-4">
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  onSelectPlatform={(platform) =>
                    setGameQuery({
                      ...gameQuery,
                      platformId: platform.id,
                      page: 1,
                    })
                  }
                />
              </div>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder, page: 1 })
                }
              />
            </div>
          </div>
          <GameGrid
            gameQuery={gameQuery}
            onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
