import Main2 from "@/components/Core";
import Footer from "@/components/footer/page";
import Navbar from "@/components/header/page";

import GreenShopBanner from "@/components/swiper/page";
import TopFooter from "@/components/topFooter/page";

export default function Home({ posts }) {
  return (
    <div className="w-[1165px] h-[80px] m-auto font-[family-name:var(--font-geist-sans)] bg-white text-black">
      <Navbar />
      <GreenShopBanner />

      <Main2 />

      <TopFooter />
      <Footer />
    </div>
  );
}
