import { Input } from "@chakra-ui/react/input";
import { InputGroup } from "@chakra-ui/react/input-group";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input
        borderRadius={24}
        placeholder="Search games"
        variant="subtle"
        borderStyle="none"
      />
    </InputGroup>
  );
};

export default SearchInput;
