import Footer from "@/components/footer/page";
import Navbar from "@/components/header/page";
import TopFooter from "@/components/topFooter/page";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;
  console.log(id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post);

  return (
    <>
      <div className="w-[1165px] m-auto">
        <Navbar />
        <div className="flex w-full gap-12 max-lg:flex-col">
          <div className="flex-1 flex gap-6 max-lg:flex-col">
            <div className="flex flex-col justify-between max-lg:order-2 max-lg:flex-row max-lg:gap-3 max-lg:overflow-x-scroll ">
              <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer  hover:border-[#46A358] transition-colors">
                <Image
                  src="/flower.png"
                  alt="Logo"
                  width={100}
                  height={50}
                  className="ant-image-img w-full h-full"
                  priority
                />
              </div>
              <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer  hover:border-[#46A358] transition-colors">
                <Image
                  src="/flower.png"
                  alt="gul"
                  width={100}
                  height={50}
                  className="ant-image-img w-full h-full"
                  priority
                />
              </div>
              <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer  hover:border-[#46A358] transition-colors">
                <Image
                  src="/flower.png"
                  alt="flower"
                  width={100}
                  height={50}
                  className="ant-image-img w-full h-full"
                  priority
                />
              </div>
              <div className="w-[100px] h-[100px] bg-[#e5e5e5] cursor-pointer  hover:border-[#46A358] transition-colors">
                <Image
                  src="/flower.png"
                  alt="gul"
                  width={100}
                  height={50}
                  className="ant-image-img w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="cursor-pointer flex justify-center items-center w-full">
              <div className="ant-image css-k7429z">
                <Image src="/flower.png" alt="alt" width={300} height={400} />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-[50px] h-[50px] cursor-pointer"
                  src="https://alqadir.edu.pk/wp-content/uploads/2022/09/BS-Islamic-Studies-2022.jpg"
                  alt=""
                />
                <div>
                  <div>
                    <h1 className="font-bold text-[28px]">123</h1>
                    <h3 className="font-bold text-[#46A358] text-[22px]">
                      $12
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#46A35880] mt-[12px]"></div>
            <div className="mt-[12px]">
              <h3 className="font-medium text-[20px]">Short Description:</h3>
              <p className="font-light mt-[10px]">
                Monstera Deliciosa, often known as the "Swiss Cheese Plant," is
                a tropical houseplant prized for its large, glossy leaves that
                develop unique splits and holes as they mature. Originating from
                the rainforests of Central America, this plant brings a touch of
                the exotic into any indoor space. It thrive
              </p>
            </div>
            <div className="mt-[12px]">
              <h3 className="font-medium text-[20px]">Size:</h3>
              <div className="flex flex-col gap-3 mt-[12px]">
                <div className="flex gap-3">
                  <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
                    S
                  </button>
                  <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
                    M
                  </button>
                  <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
                    L
                  </button>
                  <button className="w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors">
                    XL
                  </button>
                </div>
                <div className="flex gap-3">
                  <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                    -
                  </button>
                  <h3 className="font-medium text-[20px]">0</h3>
                  <button className="w-[35px] h-[35px] bg-[#46A358] rounded-full text-white">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-[10px] gap-3">
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
                BUY NOW
              </button>
              <button className="flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px] border border-[#46A358] bg-transparent">
                <p className="text-black">ADD TO CARD</p>
              </button>
              <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[40px] h-[40px]  border border-[#46A358] text-[20px] ">
                <span
                  role="img"
                  aria-label="heart"
                  className="anticon anticon-heart text-[#000]"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="heart"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="ant-descriptions mt-[12px] css-k7429z">
              <div className="ant-descriptions-view">
                <table>
                  <tbody>
                    <tr className="ant-descriptions-row">
                      <td className="ant-descriptions-item">
                        <div className="ant-descriptions-item-container mb-[10px]">
                          <span className="text-gray-400 ant-descriptions-item-label ">
                            SKU:
                          </span>
                          <span className="ant-descriptions-item-content">
                            66d09a759fa7aef6c5d0012f
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="ant-descriptions-row">
                      <td className="ant-descriptions-item">
                        <div className="ant-descriptions-item-container mb-[10px]">
                          <span className="ant-descriptions-item-label text-gray-400 ">
                            Categories:
                          </span>
                          <span className="ant-descriptions-item-content">
                            HOUSE-PLANTS
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="ant-descriptions-row">
                      <td className="ant-descriptions-item">
                        <div className="ant-descriptions-item-container ">
                          <span className="ant-descriptions-item-label text-gray-400 ">
                            Tags:
                          </span>
                          <span className="ant-descriptions-item-content">
                            Home, Garden, Plants
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-5">
          <h1>
            <span className="text-[18px]  text-green-800">
              Product Description
            </span>{" "}
            Reviews (0)
          </h1>
          <h2>
            <span className="text-[18px] ">About Monstera Deliciosa</span>-
            {post?.body}
            <span>
              Monstera Deliciosa, commonly referred to as the Swiss Cheese Plant
              due to its distinctive leaf patterns, is a staple in many plant
              lovers' collections. This stunning plant originates from the
              tropical rainforests of Central America, where it climbs trees and
              absorbs nutrients from the air and soil. The Monstera’s leaves are
              its most striking feature. When young, the leaves are heart-shaped
              and solid. As the plant matures, the leaves become large and
              develop characteristic splits and holes, creating the iconic look
              that many plant enthusiasts adore. These holes and splits are
              thought to help the plant survive in its native habitat by
              allowing strong winds to pass through the leaves without causing
              damage.
            </span>
          </h2>
        </div>
        <TopFooter />
        <Footer />
      </div>
    </>
  );
}
