import { useContext, useMemo, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { ProductContext } from "providers/ProductProvider";
import SectionHeader from "layouts/section/SectionHeader";
import Section from "layouts/section/Section";

import {
  HeroMobileImages,
  HeroDesktopImages,
  UpcomingAuctionImages,
} from "data/DisplayImages";

/**
  Intro section imports
**/
import {
  IntroText,
  MobileIntroDisplay,
  DesktopIntroDisplay,
} from "./components/home/Intro";

/**
  Featured products section imports 
**/
import { FeaturedProductList } from "pages/components/home/Featured";

/**
  Upcoming auctions and exhibition section imports
**/
import {
  UpcomingAuctionDisplay,
  UpcomingAuctionFooter,
  UpcomingAuctionHeader,
} from "./components/home/UpcomingAuction";
import { ExplorePagesContent } from "./components/home/ExplorePages";

/**
  Top creators section imports 
**/
import {
  TopCreatorsText,
  TopCreatorsDisplay,
} from "./components/home/TopCreators";

const Home = () => {
  const { products } = useContext(ProductContext);

  const featuredProduct = useMemo(() => {
    return products.slice(0, 3);
  }, []);

  const matches = useMediaQuery("(min-width:1024px)");

  return (
    <>
      <Section
        content={
          <div className="flex flex-col space-y-20">
            <IntroText />
            {matches ? (
              <DesktopIntroDisplay images={HeroDesktopImages} />
            ) : (
              <MobileIntroDisplay images={HeroMobileImages} />
            )}
          </div>
        }
      />

      <Section
        className="w-[90%] lg:w-[80%] mx-auto"
        content={
          <>
            <SectionHeader label="Featured products" />
            <FeaturedProductList products={featuredProduct} />
          </>
        }
      />

      <Section
        content={
          <div
            className="upcomingGradient py-[10%] px-[10%] lg:px-[10%] lg:py-0 
            relative text-white-01"
          >
            <UpcomingAuctionHeader />
            <UpcomingAuctionDisplay images={UpcomingAuctionImages} />
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

      <Section
        content={
          <div className="bg-black-07 relative">
            <TopCreatorsText />
            <TopCreatorsDisplay />
          </div>
        }
      />
    </>
  );
};

export default Home;
