import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import BannerHeader from "../components/BannerHeader";
import Header from "../components/Header";

import beachIcon from "../../public/img/icons/beach.png";
import buildingIcon from "../../public/img/icons/building.png";
import cocktailIcon from "../../public/img/icons/cocktail.png";
import earthIcon from "../../public/img/icons/earth.png";
import museumIcon from "../../public/img/icons/museum.png";
import TravelTypes from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <Box mx="auto" maxWidth="1440px" bg="white">
      <Flex direction="column">
        <Header />
        <BannerHeader />
        <Flex align="center" w="100%" justify="space-between" px="36" py="20">
          <TravelTypes icon={cocktailIcon} text="vida noturna" />
          <TravelTypes icon={beachIcon} text="praia" />
          <TravelTypes icon={buildingIcon} text="moderno" />
          <TravelTypes icon={museumIcon} text="clássico" />
          <TravelTypes icon={earthIcon} text="e mais..." />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
