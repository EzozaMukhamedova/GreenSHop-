"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogClose,
} from "@radix-ui/react-dialog";

export function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const [tabValue, setTabValue] = useState("account");

  async function handleSignUp(e) {
    e.preventDefault();
    const res = await axios.post(
      `https://green-shop-backend.onrender.com/api/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
      { name, surname, email, password }
    );

    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.data.token));

    setTabValue("account");
    setUser(name);
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#46A358] hover:bg-[#437a4e] rounded-md w-24 items-center gap-1 h-9 text-base text-white cursor-pointer">
          {user || "Login"}
        </Button>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-opacity-50 z-50" />
      <DialogContent className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-lg sm:max-w-[425px] w-full p-6 relative">
          <DialogClose asChild>
            <div className="flex justify-end mb-[10px]">
              <Button className="text-black bg-white cursor-pointer hover:bg-gray-200">
                X
              </Button>
            </div>
          </DialogClose>
          <Tabs
            defaultValue="account"
            value={tabValue}
            onValueChange={setTabValue}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                className="cursor-pointer focus:text-[#46A358] hover:text-[#46A358]"
                value="account"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                className="cursor-pointer focus:text-[#46A358] hover:text-[#46A358]"
                value="password"
              >
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Label className="mt-[20px]" htmlFor="email">
                Enter your username and password to login.
              </Label>
              <form onSubmit={(e) => handleLogin(e, email, password)}>
                <Input
                  type="email"
                  className="mt-5 mb-5 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className="bg-[#46A358] rounded-md items-center gap-1 h-9 text-base text-white cursor-pointer justify-center mx-auto hover:bg-[#437a4e] mt-[50px] w-full"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="password">
              <form onSubmit={handleSignUp}>
                <Input
                  className="mt-[20px]"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  className="mt-[20px]"
                  id="surname"
                  placeholder="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />

                <Input
                  className="mt-[20px]"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  className="mt-[20px]"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-[#46A358] hover:bg-[#437a4e] cursor-pointer w-full text-white rounded-md px-4 py-2 mt-4"
                >
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
