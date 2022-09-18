import classes from "./search-box.module.css";

const SearchBox = ({ className, onChangeHandler, placeHolder }) => (
  <input
    className={`${classes["search-box"]} ${className}`}
    type="search"
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
