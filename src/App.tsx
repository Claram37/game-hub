import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameHeading from "./components/GameHeading";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <div className="p-3">
      <NavBar />
      <div className="d-flex">
        <aside className="sidebar d-none d-lg-block">
          <GenreList />
        </aside>
        <main className="flex-grow-1">
          <div className="ps-2">
            <GameHeading />
            <div className="d-flex mb-4">
              <div className="me-4">
                <PlatformSelector />
              </div>
              <SortSelector />
            </div>
          </div>
          <GameGrid />
        </main>
      </div>
    </div>
  );
}

export default App;
