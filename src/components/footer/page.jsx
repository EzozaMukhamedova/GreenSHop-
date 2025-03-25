import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="flex justify-between p-[23px] max-lg:flex-col max-lg:items-center gap-2.5 bg-white text-black">
        <div>
          <Image
            src="/green_logo.svg"
            alt="gul"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <div className="flex gap-2.5 items-center">
          <Image
            src="/location.svg"
            alt="location"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            priority
            className="w-5 h-5"
          />
          <p className="text-sm">
            70 West Buckingham Ave. <br /> Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <Image
            src="/email.svg"
            alt="email"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            priority
            className="w-5 h-5"
          />
          <p className="text-sm">contact@greenshop.com</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <Image
            src="/call.svg"
            alt="call"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            priority
            className="w-5 h-5"
          />
          <p className="text-sm">+88 01911 717 490</p>
        </div>
      </div>
      <div className="flex justify-between p-[23px] max-sm:flex-col max-sm:gap-4 bg-white">
        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="font-bold">My Account</h3>
          <p className="font-light cursor-pointer">My Account</p>
          <p className="font-light cursor-pointer">Address</p>
          <p className="font-light cursor-pointer">Wishlist</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5">
          <h3 className="font-bold">Categories</h3>
          <p className="font-light cursor-pointer">House Plants</p>
          <p className="font-light cursor-pointer">Potter Plants</p>
          <p className="font-light cursor-pointer">Seeds</p>
          <p className="font-light cursor-pointer">Small Plants</p>
          <p className="font-light cursor-pointer">Accessories</p>
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Social Media</h3>
          <div className="flex gap-3 mt-[20px] bg-white">
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                priority
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer bg-white">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                priority
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <Image
                src="/twitter.svg"
                alt="twitter"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                priority
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                priority
                className="w-5 h-5"
              />
            </div>
            <div className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer">
              <Image
                src="/union.svg"
                alt="union"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                priority
                className="w-5 h-5"
              />
            </div>
          </div>
          <h3 className="font-bold mt-[33px]">We accept</h3>
          <div className="flex gap-3 mt-[20px]">
            <Image
              src="/paypal.svg"
              alt="paypal"
              width={100}
              height={100}
              priority
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <Image
              src="/mastercard (1).svg"
              alt="mastercard"
              width={100}
              height={100}
              priority
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <Image
              src="/visaCard.svg"
              alt="visa"
              width={100}
              height={100}
              priority
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <Image
              src="/amex.svg"
              alt="amex"
              width={100}
              height={100}
              priority
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <h3 className="text-center p-[10px] font-normal text-sm bg-white">
        © 2023 GreenShop. All Rights Reserved.
      </h3>
    </>
  );
}
