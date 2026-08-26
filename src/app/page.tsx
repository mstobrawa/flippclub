import { FeaturedSlider } from "@/components/sections/FeaturedSlider";
import { SubNav } from "@/components/sections/SubNav";
import { Zones } from "@/components/sections/Zones";
import { KillerQueen } from "@/components/sections/KillerQueen";
import { Pricing } from "@/components/sections/Pricing";
import { Gallery } from "@/components/sections/Gallery";
import { OpeningHours } from "@/components/sections/OpeningHours";
import { About } from "@/components/sections/About";
import { FacebookFeed } from "@/components/sections/FacebookFeed";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <FeaturedSlider />
      <SubNav />
      <Zones />
      <KillerQueen />
      <Pricing />
      <Gallery />
      <OpeningHours />
      <About />
      <FacebookFeed />
      <Contact />
    </>
  );
}
