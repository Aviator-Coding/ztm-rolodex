import "./search-box.style.css";
import {
  //ChangeEvent,
  ChangeEventHandler,
} from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // Alternative to ChangeEventHandler you could define a return here
  //onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  );
};
export default SearchBox;
