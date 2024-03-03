import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo-small.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize={"60px"} />
      <Text>Game</Text>
    </HStack>
  );
};

export default NavBar;
