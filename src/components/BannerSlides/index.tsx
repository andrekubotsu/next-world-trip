import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface BannerSlidesProps {
  bannerLink: StaticImageData;
  continent: string;
  subtitle: string;
}

export default function BannerSlides({
  bannerLink,
  continent,
  subtitle,
}: BannerSlidesProps) {
  return (
    <Box w="1240px" h="450px">
      <Flex
        width="550px"
        height="150px"
        position="absolute"
        zIndex="overlay"
        top="50%"
        mt="-75px"
        left="50%"
        ml="-275px"
        direction="column"
        justify="center"
        align="center"
      >
        <Text fontSize="5xl" fontWeight="bold">
          {continent}
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.300"
          textAlign="center"
        >
          {subtitle}
        </Text>
      </Flex>
      <Image src={bannerLink} alt="Asia" />
    </Box>
  );
}
