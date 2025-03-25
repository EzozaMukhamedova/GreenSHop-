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

import React from "react";

const Categories = ({ data }) => {
  return (
    <div className="bg-white p-4 w-64">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <div className="space-y-2">
        {data.map(({ title, count }, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-gray-100 rounded-md p-2 cursor-pointer hover:text-green-600"
          >
            <span className="text-gray-700 hover:text-green-600">{title}</span>
            <span className="text-gray-600 hover:text-green-600">({count})</span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Price Range</h3>
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300"
        />
        <div className="flex justify-between text-gray-700 text-sm mt-2 hover:text-green-600">
          <span>$39</span>
          <span>$1230</span>
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
              <span className="text-gray-700 hover:text-green-600">{size.split(" ")[0]}</span>
              <span className="text-gray-600 hover:text-green-600">({size.split(" ")[1]})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
