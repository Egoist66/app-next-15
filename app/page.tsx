import Image from "next/image";
import { FC } from "react";

export default async function Home() {
  const data: Array<{ id: number; title: string; body: string }> = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return (
    <div>
      <h1>Hello Next</h1>

      {data.map((post) => (
        <div
          key={post.id}
          className="p-4 m-4 border-2 border-solid rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-lg">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
