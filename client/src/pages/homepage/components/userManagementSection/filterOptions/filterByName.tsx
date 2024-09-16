import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { default as searchIcon } from "../../../../../assets/svg/search.svg";
import { useNameFilter } from "../../../hooks/useNameFilter";

function FilterByName() {
  const { nameKeyword, handleKeywordChange } = useNameFilter();

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
          value={nameKeyword}
          onChange={handleKeywordChange}
        />
      </InputGroup>
    </div>
  );
}

export default FilterByName;
