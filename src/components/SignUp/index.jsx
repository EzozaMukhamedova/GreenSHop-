// "use client";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogOverlay,
//   DialogTitle,
//   DialogDescription,
//   DialogClose,
//   CardContent,
// } from "@radix-ui/react-dialog";
// import { useEffect, useState } from "react";
// import axios from "axios";
// export function SignUp() {
//   async function SignUps(e) {
//     // e.preventDefault();
//     const res = await axios.post(
//       `https://green-shop-backend.onrender.com/api/user/sign-up?access_token=64ebc1e2c6d3f056a8c85b7`,
//       { name, surname, email, password }
//     );

//     localStorage.setItem("user", JSON.stringify(res.data.data.user));
//     localStorage.setItem("user", JSON.stringify(res.data.data.token));
//   }

//   useEffect(() => {
//     SignUps();
//   }, []);

//   const [name, setName] = useState();
//   const [surname, setSurname] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return (
//     <Dialog>
//       <DialogTrigger className="border" asChild>
//         <Button
//           className="bg-[#46A358] rounded-md w-24 items-center gap-1 h-9 text-base text-white cursor-pointer"
//           variant="outline"
//         >
//           Login
//         </Button>
//       </DialogTrigger>

//       <DialogOverlay className="fixed inset-0  bg-opacity-50 z-50 border" />
//       <DialogContent className="fixed inset-0 flex items-center justify-center p-4 z-50 border">
//         <div className="bg-white rounded-lg shadow-lg sm:max-w-[425px] w-full p-6 relative">
//           <DialogClose className="absolute top-3 right-3" asChild>
//             <Button className="text-black bg-white cursor-pointer hover:bg-gray-200">
//               X
//             </Button>
//           </DialogClose>

//           <div className="grid gap-4">
//             <Tabs defaultValue="account" className="w-[300px] mx-auto">
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger value="account">Login</TabsTrigger>
//                 <TabsTrigger value="password">Register</TabsTrigger>
//               </TabsList>

//               <TabsContent value="account">
//                 {" "}
//                 <CardContent className="space-y-2">
//                   <div className="space-y-1">
//                     <Label htmlFor="name">Name</Label>
//                     <Input id="name" defaultValue="Pedro Duarte" />
//                   </div>
//                   <div className="space-y-1">
//                     <Label htmlFor="username">Username</Label>
//                     <Input id="username" defaultValue="@peduarte" />
//                   </div>
//                 </CardContent>
//               </TabsContent>

//               <TabsContent value="password">
//                 <form action="" onSubmit={SignUp}>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="name" className="text-right">
//                       Name
//                     </Label>
//                     <input
//                       id="name"
//                       value={name}
//                       className="col-span-3"
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="name" className="text-right">
//                       Surname
//                     </Label>
//                     <input
//                       id="name"
//                       value={surname}
//                       className="col-span-3"
//                       onChange={(e) => setSurname(e.target.value)}
//                     />
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="name" className="text-right">
//                       Email
//                     </Label>
//                     <input
//                       id="name"
//                       defaultValue={email}
//                       className="col-span-3"
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="grid grid-cols-4 items-center gap-4">
//                     <Label htmlFor="name" className="text-right">
//                       Password
//                     </Label>
//                     <input
//                       id="name"
//                       defaultValue={password}
//                       className="col-span-3"
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>

//                   <button>Sign Up</button>
//                 </form>
//               </TabsContent>
//             </Tabs>
//           </div>

//           <Button
//             type="submit"
//             className="bg-[#46A358] text-white rounded-md px-4 py-2 mt-4"
//           >
//             Save changes
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";
import { useState } from "react";
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
  CardContent,
} from "@radix-ui/react-dialog";

export function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    const res = await axios.post(
      `https://green-shop-backend.onrender.com/api/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
      { name, surname, email, password }
    );

    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    localStorage.setItem("token", JSON.stringify(res.data.data.token));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#46A358] rounded-md w-24 items-center gap-1 h-9 text-base text-white cursor-pointer">
          Login
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
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger className="cursor-pointer focus:text-[#46A358] hover:text-[#46A358] " value="account">Login</TabsTrigger>
              <TabsTrigger className="cursor-pointer focus:text-[#46A358] hover:text-[#46A358] " value="password">Register</TabsTrigger>
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
                  className="bg-[#46A358] rounded-md  items-center gap-1 h-9 text-base text-white cursor-pointer justify-center mx-auto hover:bg-[#437a4e] mt-[50px] w-full"
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
