import { create } from "zustand";

const useUserstore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    set({ users: data });
  },
}));

export default useUserstore;
