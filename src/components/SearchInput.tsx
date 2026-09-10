import { Form } from "react-bootstrap";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <div className="position-relative flex-grow-1">
      <LuSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 " />
      <Form.Control
        type="search"
        placeholder="Search games"
        className="rounded-pill border-0 bg-body-secondary ps-5"
      />
    </div>
  );
};

export default SearchInput;
