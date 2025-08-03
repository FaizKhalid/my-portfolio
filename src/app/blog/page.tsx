import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { FrontMatter, getAllPosts } from "@/lib/util/mdx";
import Link from "next/link";

export default function BlogListPage() {
  const posts: FrontMatter[] = getAllPosts();

  const truncate = (str: string, length: number) =>
    str.length > length ? str.substring(0, length) + "..." : str;

  return (
    <Container className="min-h-[200vh] p-8 pt-20 md:pb-10">
      <Heading>All Blogs</Heading>
      <Subheading>
        Software developer passionate about building scalable systems.
      </Subheading>
      <div className="flex flex-col gap-5 pt-10">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="no-underline hover:no-underline"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-primary font-bold tracking-tight">
                {post.title} {/* direct use instead of post.meta.title */}
              </h2>
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
