import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import BannerHeader from "../components/BannerHeader";
import Header from "../components/Header";

import beachIcon from "../../public/img/icons/beach.png";
import buildingIcon from "../../public/img/icons/building.png";
import cocktailIcon from "../../public/img/icons/cocktail.png";
import earthIcon from "../../public/img/icons/earth.png";
import museumIcon from "../../public/img/icons/museum.png";
import TravelTypes from "../components/TravelTypes";

import asiaBanner from "../../public/img/continents/asia.png";
import europeBanner from "../../public/img/continents/europe.png";
import northAmericaBanner from "../../public/img/continents/north_america.png";
import southAmericaBanner from "../../public/img/continents/south_america.png";
import oceaniaBanner from "../../public/img/continents/oceania.png";
import africaBanner from "../../public/img/continents/africa.png";
import BannerSlides from "../components/BannerSlides";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/bundle";

const Home: NextPage = () => {
  return (
    <Box mx="auto" maxWidth="1440px" bg="white">
      <Flex direction="column" align="center">
        <Header />
        <BannerHeader />
        <Flex align="center" w="100%" justify="space-between" px="36" py="20">
          <TravelTypes icon={cocktailIcon} text="vida noturna" />
          <TravelTypes icon={beachIcon} text="praia" />
          <TravelTypes icon={buildingIcon} text="moderno" />
          <TravelTypes icon={museumIcon} text="clássico" />
          <TravelTypes icon={earthIcon} text="e mais..." />
        </Flex>
        <Box
          w="90px"
          borderBottom="2px"
          borderBottomColor="gray.headingsText"
        ></Box>
        <Box maxWidth="1240px" mt="14" mb="14">
          <Box
            maxWidth="1240px"
            display="flex"
            flexDirection="column"
            justify="center"
            align="center"
            mb="14"
          >
            <Text color="gray.headingsText" fontSize="4xl" fontWeight="medium">
              Vamos nessa?
            </Text>
            <Text color="gray.headingsText" fontSize="4xl" fontWeight="medium">
              Então escolha seu continente
            </Text>
          </Box>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <BannerSlides
                bannerLink={africaBanner}
                continent="Africa"
                subtitle="Encontre sua aventura"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlides
                bannerLink={asiaBanner}
                continent="Asia"
                subtitle="Encontre culturas milenares"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlides
                bannerLink={europeBanner}
                continent="Europa"
                subtitle="O continente mais antigo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlides
                bannerLink={northAmericaBanner}
                continent="América do Norte"
                subtitle="Grandes metrópoles e climas diversos"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlides
                bannerLink={oceaniaBanner}
                continent="Oceania"
                subtitle="Lugares exóticos"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BannerSlides
                bannerLink={southAmericaBanner}
                continent="América do Sul"
                subtitle="Paisagens exuberantes e calor latino"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
