import axios from "axios";
import React from "react";
import Categories from "./categories2";

const token = "64bebc1e2c6d3f056a8c85b7";

const CategoriesMain = async () => {
  const res = await axios.get(
    `${process.env.NEXT_API}/flower/category?access_token=${token}`
  );
  const data = await res.data.data;

//   console.log(data);
  
  return (
    <div>
      <Categories data={data} />
    </div>
  );
};

export default CategoriesMain;
