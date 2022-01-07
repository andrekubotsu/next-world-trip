import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TravelTypesProps {
  icon: StaticImageData;
  text: string;
}

export default function TravelTypes({ icon, text }: TravelTypesProps) {
  return (
    <Flex direction="column" justify="center" align="center">
      <Image
        src={icon}
        alt="Tipos de viagem"
        height={85}
        width={85}
        layout="fixed"
      />
      <Text
        mt="6"
        color="gray.headingsText"
        fontWeight="semibold"
        fontSize="2xl"
      >
        {text}
      </Text>
    </Flex>
  );
}
