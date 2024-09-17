import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { default as searchIcon } from "../../../../../assets/svg/search.svg";
import { useFilter } from "../../../hooks/useDataFetch";

function FilterByName() {
  //access the hook and state to send and receive the value
  const { keyword, handleKeywordChange } = useFilter();

  return (
    <div className="w-full text-gray-600 ">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <img src={searchIcon} alt="search-icon" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Enter name or username"
          bg="white"
          fontSize={14}
          value={keyword}
          onChange={handleKeywordChange}
          id="keyword"
        />
      </InputGroup>
    </div>
  );
}

export default FilterByName;
