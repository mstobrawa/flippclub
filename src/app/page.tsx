import { FeaturedSlider } from "@/components/sections/FeaturedSlider";
import { FacebookFeed } from "@/components/sections/FacebookFeed";

export default function Home() {
  return (
    <main className="bg-[linear-gradient(135deg,#0d0b54_0%,#00053b_12%,#010533_30%,#010522_60%,#010522_100%)]">
      <FeaturedSlider />
      <FacebookFeed />
    </main>
  );
}
