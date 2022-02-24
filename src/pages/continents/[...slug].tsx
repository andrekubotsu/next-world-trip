import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import Image from "next/image";

import europeBanner from "../../../public/img/continents/europe.png";

export default function Continents() {
  return (
    <Box mx="auto" maxWidth="1440px" bg="white">
      <Flex direction="column" align="center">
        <Header />
        <Box maxWidth="1440px" position="relative">
          <Flex
            width="430px"
            height="100px"
            position="absolute"
            zIndex="overlay"
            top={369}
            left={140}
            direction="column"
            justify="center"
            align="center"
          >
            <Text fontSize="5xl" fontWeight="semi-bold">
              América do Norte
            </Text>
          </Flex>
          <Image
            src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=80"
            alt="Europa"
            width={1440}
            height={500}
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
}
