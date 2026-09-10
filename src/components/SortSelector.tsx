import {
  Button,
  Menu,
  MenuItemGroup,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const SortSelector = () => {
  return (
    <Menu.Root>
      <MenuTrigger>
        <Button variant="subtle" borderRadius={8} borderStyle="none">
          Order by: Relevance
          <LuChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItemGroup>
              <Menu.Item value="relevance">Relevance</Menu.Item>
            </MenuItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
