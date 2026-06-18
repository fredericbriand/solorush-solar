import "./Search.scss";

function Search({ search, setSearch }) {
  return (
    <div className="search-bar">
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
