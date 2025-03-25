// import Link from "next/link";

// export default async function Dashboard() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   console.log(posts.data);

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
//       <h2 className="">Hello Dashboard</h2>
//       {posts?.map((post, index) => {
//         return (
//           <div className="" key={index}>
//             <Link href={`/dashboard/posts/${post?.id}`}>{post.title}</Link>
//           </div>
//         );
//       })}
//       {/* <a href="/dashboard">Dashboard page</a> */}
//       <Link href="/dashboard/about">About</Link>
//       <Link href="/">Back</Link>
//     </div>
//   );
// }
