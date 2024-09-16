import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

function FilterOrder() {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} bgColor="#374151" w="full">
        <span className="text-sm text-white ">Order</span>
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup
          defaultValue="asc"
          title="Alphabetical Order"
          type="radio"
        >
          <MenuItemOption value="asc">Ascending (A - Z)</MenuItemOption>
          <MenuItemOption value="desc">Descending (Z - A)</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default FilterOrder;
