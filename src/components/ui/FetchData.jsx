"use client";
import React, { useEffect } from "react";
import useUserstore from "store/userStore";

const FetchData = () => {
  const { users, fetchUsers } = useUserstore();

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log();

  return (
    <div>
      {users?.map((user, index) => {
        return (
          <div key={index} className="">
            <h2>{user.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;
