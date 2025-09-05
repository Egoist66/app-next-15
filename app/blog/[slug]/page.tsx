import { Text } from "@/src/components/shared/Text";

export default function SingleBlogPage({params}: Readonly<{params: {slug: string}}>) {


    return(
        <section>
            <Text variant="h1">Single Blog Page</Text>

            <Text>Slug: {+params.slug + (+params.slug)}</Text>
        </section>
    )

}