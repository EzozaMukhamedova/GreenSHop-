import axios from "axios";
import React from "react";
import Card from "./card";

const token = "64bebc1e2c6d3f056a8c85b7";

const Cards2 = async () => {
  const res = await axios.get(
    `${process.env.NEXT_API}/flower/category/house-plants?access_token=${token}`
  );
  const data = await res.data.data;

  console.log(data);

  return (
    <>
      {" "}
      <div className="">
        <div className="flex items-center  justify-between  ">
          <div className="flex gap-12 mb-[30px]">
            <h2 className="hover:text-green-600 hover:underline cursor-pointer">
              All Plants
            </h2>
            <h2 className="hover:text-green-600 hover:underline cursor-pointer">
              New Arrivals
            </h2>
            <h2 className="hover:text-green-600 hover:underline cursor-pointer">
              Sale
            </h2>
          </div>

          <div className="flex items-center  w-[250px] bg-white py-2 px-4  rounded mt-[-30px]">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 cursor-pointer"
              aria-label="Sort by"
            >
              <option value="default">Default Sorting</option>
              <option value="cheapest">The Cheapest</option>
              <option value="expensive">Most Expensive</option>
            </select>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-2  h-[800px]">
          {data.map((info, index) => {
            return <Card key={index} info={info} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards2;
