import {
  Button,
  Menu,
  MenuItemGroup,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const PlatformSelector = () => {
  return (
    <Menu.Root>
      <MenuTrigger>
        <Button variant="subtle" borderRadius={8} borderStyle="none">
          PlayStation
          <LuChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItemGroup>
              <Menu.Item value="playstation">PlayStation</Menu.Item>
            </MenuItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
