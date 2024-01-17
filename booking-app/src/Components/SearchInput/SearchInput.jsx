import "./SearchInput.css";
const SearchInput = ({ placeholder, handleSearchChange }) => {
  return (
    <input
      onChange={(e) => handleSearchChange(e)}
      type="text"
      placeholder={placeholder}
      className="search-input"
    />
  );
};

export default SearchInput;
