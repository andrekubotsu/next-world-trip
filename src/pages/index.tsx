import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import BannerHeader from "./components/BannerHeader";
import Header from "./components/Header";

const Home: NextPage = () => {
  return (
    <Box mx="auto" maxWidth="1440px" bg="white">
      <Flex direction="column">
        <Header />
        <BannerHeader />
      </Flex>
    </Box>
  );
};

export default Home;
