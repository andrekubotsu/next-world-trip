import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/img/logo.png";

export default function Header() {
  return (
    <Flex p="6" w="100%" align="center" justify="center">
      <Image
        src={logo}
        alt="Logo Worldtrip"
        width={185}
        height={46}
        layout="fixed"
      />
    </Flex>
  );
}
