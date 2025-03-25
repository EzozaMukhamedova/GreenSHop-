import Image from "next/image";

export default function GreenShopBanner() {
  return (
    <div className="bg-gray-100 p-10 flex items-center justify-between">
      <div className="max-w-lg">
        <h3 className="text-sm text-gray-600 uppercase">
          Welcome to GreenShop
        </h3>
        <h1 className="text-5xl font-bold text-gray-900 mt-2">
          LET&apos;S MAKE A BETTER{" "}
          <span className="text-green-600">PLANET</span>
        </h1>
        <p className="text-gray-600 mt-4">
          We are an online plant shop offering a wide <br /> range of cheap and
          trendy plants. Use our plants <br /> to create a unique Urban Jungle.
          Order <br /> your favorite plants!
        </p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 cursor-pointer">
          SHOP NOW
        </button>
      </div>
      <div className="relative w-72 h-72">
        <Image
          src="/headerBg.png"
          alt="Plants"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
