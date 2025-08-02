import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import MyButton from "@/components/Mybutton";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

interface FrontMatter {
  title: string;
  date: string;
  image: string;
  description: string;
}

const components = { MyButton };

export async function generateStaticParams() {
  const files = fs.readdirSync("posts");
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const filePath = path.join("posts", `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  const frontmatter = data as FrontMatter;

  return (
    <article className="prose mx-auto min-h-[160vh] max-w-3xl py-8 pt-20">
      {frontmatter.image && (
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="mb-6 max-h-96 w-full max-w-2xl rounded-lg border border-neutral-200 object-cover shadow-2xl"
        />
      )}

      <h1>{frontmatter.title}</h1>
      <p className="mb-4 text-sm text-gray-500">
        {new Date(frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <MDXRemote source={content} components={components} />
    </article>
  );
}
