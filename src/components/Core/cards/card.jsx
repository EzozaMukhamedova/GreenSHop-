// import React from "react";

// const Card = ({ info }) => {
//   const { title, price, main_image, discount_price } = info;

//   const altText = `Image of ${title}`;

//   return (
//     <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
//       <h2>{title}</h2>
//       <h2>${price}</h2>
//       {discount_price && <h2>Now: ${discount_price}</h2>}
//       <img
//         src={main_image}
//         alt={altText}
//         style={{ width: "250px", height: "auto" }}
//       />
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = ({ info }) => {
  const { title, price, main_image, discount_price } = info;

  return (
    <div className="">
      <div className="border border-gray-200">
        <div className="max-w-sm rounded border border-gray-200 overflow-hidden py-[30px] px-[20px] m-4 bg-[#f5f5f5] relative   ">
          <img
            className="w-full h-48 object-contain"
            src={main_image}
            alt={`Image of ${title}`}
          />
          {discount_price && (
            <span className="absolute top-[10px] left-0 bg-green-600 text-white py-1 px-2 text-xs font-bold ">
              13% OFF
            </span>
          )}
        </div>
        <div className="px-6 py-4 ">
          <div className=" text-[18px] ">{title}</div>
          <div className="font-semibold text-lg">
            {discount_price ? (
              <>
                <span className="text-green-600">${discount_price}</span>
                <span className="text-gray-500 line-through ml-2">
                  ${price}
                </span>
              </>
            ) : (
              <span>${price}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
