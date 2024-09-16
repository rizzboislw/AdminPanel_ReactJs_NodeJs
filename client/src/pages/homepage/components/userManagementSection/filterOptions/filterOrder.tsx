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
    <Menu closeOnSelect={false} isLazy placement="bottom-start">
      <MenuButton as={Button} bgColor="#055894" w="full">
        <span className="text-sm text-white">Order</span>
      </MenuButton>
      <MenuList minWidth="150px">
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
