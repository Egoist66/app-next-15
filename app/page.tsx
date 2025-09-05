import Link from "next/link";

export default async function HomePage() {
  const data: Array<{ id: number; title: string; body: string }> = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();


  return (
    <section>
      <h1>{HomePage.name}</h1>

      <Link href="/about">About</Link>

      {data.map((post) => (
        <div
          key={post.id}
          className="p-4 m-4 border-2 border-solid rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-lg">{post.body}</p>
        </div>
      ))}
    </section>
  );
}
