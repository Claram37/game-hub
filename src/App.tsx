import NavBar from "./components/NavBar";
import GenreList, { type Genre } from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import type { Platform } from "./hooks/useGames";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedOrder, setSelectedOrder] = useState("");
  return (
    <div className="p-3">
      <NavBar />
      <div className="d-flex">
        <aside className="sidebar d-none d-lg-block">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </aside>
        <main className="flex-grow-1">
          <div className="ps-2">
            <GameHeading
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
            <div className="d-flex mb-4">
              <div className="me-4">
                <PlatformSelector
                  selectedPlatform={selectedPlatform}
                  onSelectPlatform={(platform) => setSelectedPlatform(platform)}
                />
              </div>
              <SortSelector
                sortOrder={selectedOrder}
                onSelectSortOrder={(sortOrder) => setSelectedOrder(sortOrder)}
              />
            </div>
          </div>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            sortOrder={selectedOrder}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
