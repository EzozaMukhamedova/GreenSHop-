import Footer from "@/components/footer/page";
import Navbar from "@/components/header/page";
import TopFooter from "@/components/topFooter/page";

export default function Blog() {
  return (
    <>
      <div className="w-[1165px] h-[80px] m-auto">
        <Navbar />
        <main className="text-center items-center mx-auto h-[500px] justify-center mt-[100px]">
          <h2 className="text-[54px] font-bold">
            Monetize your content <br /> with{" "}
            <span className="text-green-600">GreenShop</span>
          </h2>
          <span className="text-[24px]">
            Greenshop - a platform for buying and selling, publishing and
            monetizing all types of flowers: <br /> acrticles, notes, video,
            photos, podcasts or songs.
          </span>
        </main>
        <TopFooter />
        <Footer />
      </div>
    </>
  );
}
