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
    <div className=" grid grid-cols-3 gap-2">
      {data.map((info) => {
        return <Card info={info} />;
      })}
    </div>
  );
};

export default Cards2;
