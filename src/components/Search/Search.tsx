import styles from "./Search.module.scss";

function Search({ search, setSearch }) {
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
