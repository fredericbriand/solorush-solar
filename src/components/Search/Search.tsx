import styles from "./Search.module.scss";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

function Search({ search, setSearch }: SearchProps) {
  return (
    <div className={styles['search-bar']}>
      <input
        type="text"
        placeholder="Rechercher une planète..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
