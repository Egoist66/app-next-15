import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: AboutPage.name,
};
export default function AboutPage() {
  return (
    <section>
      <h1 className="bg-blue-500">{AboutPage.name}</h1>

      <Link href="/">Home</Link>
    </section>
  );
}
