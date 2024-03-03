import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo-small.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingX={5}>
      <Image src={Logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;