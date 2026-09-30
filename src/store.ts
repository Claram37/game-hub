import { create } from "zustand";

interface GameQuery {
  page: number;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setPage: (page: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    page: 1,
  },
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, searchText, page: 1 },
    })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId, page: 1 } })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId, page: 1 },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder, page: 1 } })),
  setPage: (page) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, page } })),
}));

export default useGameQueryStore;
