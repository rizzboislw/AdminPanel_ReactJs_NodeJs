import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";
import { useFilter } from "../../../hooks/useDataFetch";

function FilterByGender() {
  const { gender, handleGenderChange } = useFilter();

  return (
    <Menu closeOnSelect={false} placement="bottom-start">
      <MenuButton as={Button} bgColor="#055894" w="full">
        <span className="text-sm text-white ">Gender</span>
      </MenuButton>
      <MenuList minWidth="150px">
        <MenuOptionGroup defaultValue={gender} title="Gender" type="radio">
          <MenuItemOption
            value="all"
            onClick={() => {
              handleGenderChange("all");
            }}
          >
            All
          </MenuItemOption>
          <MenuItemOption
            value="male"
            onClick={() => {
              handleGenderChange("male");
            }}
          >
            Male
          </MenuItemOption>
          <MenuItemOption
            value="female"
            onClick={() => {
              handleGenderChange("female");
            }}
          >
            Female
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default FilterByGender;
