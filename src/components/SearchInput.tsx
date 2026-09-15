import { useRef } from "react";
import { Form } from "react-bootstrap";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className="position-relative flex-grow-1"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
