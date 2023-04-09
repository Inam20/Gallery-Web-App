import { useContext, useState } from "react";
import { ImageContext } from "./App";

function SearchField() {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handeInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="search-field">
      <input
        className="search"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handeInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
}

export default SearchField;
