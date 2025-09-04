import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: About.name
}
export default function About() {
  return (
    <section>
        <h1 className="bg-blue-500">{About.name}</h1>

        <Link href="/">Home</Link>
    </section>
  )
}
