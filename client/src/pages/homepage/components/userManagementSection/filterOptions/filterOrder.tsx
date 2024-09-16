import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";
import { useFilter } from "../../../hooks/useDataFetch";

function FilterOrder() {
  const { order, handleOrderChange } = useFilter();

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} bgColor="#374151" w="full">
        <span className="text-sm text-white">Order</span>
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup value={order} title="Alphabetical Order" type="radio">
          <MenuItemOption value="asc" onClick={() => handleOrderChange("asc")}>
            Ascending (A - Z)
          </MenuItemOption>
          <MenuItemOption
            value="desc"
            onClick={() => handleOrderChange("desc")}
          >
            Descending (Z - A)
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default FilterOrder;
