import Image from "next/image";
import bannerHeader from "../../../public/img/banner_head.png";

export default function BannerHeader() {
  return <Image src={bannerHeader} alt="Banner header" />;
}
