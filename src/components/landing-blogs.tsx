import { getAllPosts } from "@/lib/util/mdx";
import { Container } from "@/components/container";
import Link from "next/link";
import { SectionHeading } from "./section-heading";

export async function LandingBlogs() {
  const posts = await getAllPosts();

  const truncate = (str: string, length: number) =>
    str.length > length ? str.substring(0, length) + "..." : str;

  return (
    <Container className="pb-10 ">
      <SectionHeading delay={0.3}>
        I love to write down things I make
      </SectionHeading>

      <div className="flex flex-col gap-5 pt-10">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="no-underline hover:no-underline"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-primary font-bold tracking-tight">
                {post.title}
              </h3>
              <p className="text-secondary text-xs tracking-tight">
                {new Date(post.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-secondary max-w-lg text-sm">
              {truncate(post.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
