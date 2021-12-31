import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../public/img/logo.png";

const Home: NextPage = () => {
  return (
    <Box mx="auto" maxWidth="1440px">
      <Flex bgColor="gray.100">
        <Image src={logo} alt="Logo Worldtrip" width="185px" height="46px" />
      </Flex>
    </Box>
  );
};

export default Home;
