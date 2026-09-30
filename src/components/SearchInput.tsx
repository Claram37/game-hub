import { useRef } from "react";
import { Form } from "react-bootstrap";
import { LuSearch } from "react-icons/lu";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      className="position-relative flex-grow-1"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <LuSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 " />
      <Form.Control
        ref={ref}
        type="search"
        placeholder="Search games"
        className="rounded-pill border-0 bg-body-secondary ps-5"
      />
    </form>
  );
};

export default SearchInput;
