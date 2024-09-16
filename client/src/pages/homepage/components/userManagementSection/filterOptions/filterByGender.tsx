import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";

function FilterByGender() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} bgColor="#374151" w="full">
        <span className="text-sm text-white ">Gender</span>
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup defaultValue="asc" title="Gender" type="radio">
          <MenuItemOption value="all">All</MenuItemOption>
          <MenuItemOption value="male">Male</MenuItemOption>
          <MenuItemOption value="female">Female</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default FilterByGender;
