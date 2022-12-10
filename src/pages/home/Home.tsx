import { useMemo } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Products from "providers/ProductProvider";
import HeroImages from "providers/HeroImages";
import Section from "components/layouts/Section";
import FeaturedProductCard from "pages/home/FeaturedCard";
import { HeroIntro, HeroMobileDisplay, HeroDesktopDisplay } from "./Hero";
import {
  UpcomingAuctionDisplay,
  UpcomingAuctionFooter,
  UpcomingAuctionHeader,
} from "./UpcomingAuction";
import { ExplorePagesContent } from "./ExplorePages";

const Home = () => {
  const products = useMemo(() => {
    return Products.filter((product) => product.featured);
  }, []);

  const matches = useMediaQuery("(min-width:1024px)");

  return (
    <>
      <Section
        content={
          <div className="flex flex-col space-y-20">
            <HeroIntro />
            {matches ? (
              <HeroDesktopDisplay products={products} />
            ) : (
              <HeroMobileDisplay images={HeroImages} />
            )}
          </div>
        }
      />

      <Section
        label="Featured products"
        className="w-[90%] lg:w-[80%] mx-auto"
        content={
          <ul role="list">
            {products.map((product) => (
              <li
                key={product.id}
                className="py-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-dense 
                lg:gap-14 group lg:py-14 lg:border-t lg:border-black-01"
              >
                <FeaturedProductCard {...product} />
              </li>
            ))}
          </ul>
        }
      />

      <Section
        content={
          <div
            className="upcomingGradient py-[10%] px-[10%] lg:px-[10%] lg:py-0 
            relative text-white-01"
          >
            <UpcomingAuctionHeader />
            <Swiper
              allowTouchMove={false}
              navigation={{
                nextEl: "#upcomingBtnNext",
                prevEl: "#upcomingBtnPrev",
              }}
              speed={5000}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              effect={"fade"}
              rewind={true}
              className="h-[336px] lg:h-[568px]"
            >
              {products.map((product) => (
                <SwiperSlide key={product.cover}>
                  <UpcomingAuctionDisplay cover={product.cover} />
                </SwiperSlide>
              ))}
            </Swiper>
            <UpcomingAuctionFooter />
          </div>
        }
      />

      <Section
        content={[
          { content: "Explore marketplace", href: "/marketplace" },
          { content: "See auctions", href: "/auction" },
        ].map((nav) => (
          <ExplorePagesContent {...nav} key={nav.content} />
        ))}
      />
    </>
  );
};

export default Home;