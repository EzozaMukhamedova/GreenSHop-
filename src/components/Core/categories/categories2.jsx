// "use client";
// import React from "react";

// const Categories = ({ data }) => {
//   return (
//     <div>
//       {data?.map(({ title, count }, index) => {
//         return (
//           <div key={index} className="">
//             <h2>{title}</h2>
//             <h2>{count}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Categories;
"use client";
import Image from "next/image";
import React, { useState } from "react";

const Categories = ({ data }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleMaxPriceChange = (event) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
  };
  return (
    <div className="bg-white p-4 w-64 ">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <div className="space-y-2">
        {data.map(({ title, count }, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-gray-100 rounded-md p-2 cursor-pointer hover:text-green-600"
          >
            <span className="text-gray-700 hover:text-green-600">{title}</span>
            <span className="text-gray-600 hover:text-green-600">
              ({count})
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Price Range</h3>
        <div className="relative ">
          <div className="flex absolute inset-0 h-2">
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full h-2 bg-transparent appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to left, #10b981 0%, #10b981 ${
                  ((1000 - maxPrice) / 1000) * 100
                }%, transparent ${((1000 - maxPrice) / 1000) * 100}%)`,
              }}
            />
          </div>
          <div className="h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div className="text-gray-700 text-sm mt-2 flex justify-between">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Size</h3>
        <div className="space-y-2">
          {["Small (119)", "Medium (86)", "Large (78)"].map((size, index) => (
            <div
              key={index}
              className="flex justify-between items-center hover:bg-gray-100 rounded-md p-2 cursor-pointer hover:text-green-600"
            >
              <span className="text-gray-700 hover:text-green-600">
                {size.split(" ")[0]}
              </span>
              <span className="text-gray-600 hover:text-green-600">
                ({size.split(" ")[1]})
              </span>
            </div>
          ))}
        </div>
        <Image
          className="mt-[10px]"
          src="/banner.png"
          alt="alt"
          width={400}
          height={470}
        />
      </div>
    </div>
  );
};

export default Categories;
