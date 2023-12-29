// css
import "./styles.scss";

const SearchBar = (props) => {
  return (
    <input
      className="search-bar-style news"
      type="text"
      placeholder={props.placeholder}
    ></input>
  );
};
export default SearchBar;
