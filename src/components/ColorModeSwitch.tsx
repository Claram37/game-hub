import { HStack, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch.Root>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
