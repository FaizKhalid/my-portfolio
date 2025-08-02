import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface FrontMatter {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

// Get all posts' frontmatter + slug
export function getAllPosts(): FrontMatter[] {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      ...(data as Omit<FrontMatter, "slug">),
      slug: filename.replace(/\.mdx$/, ""),
    };
  });

  // Optional: sort by date descending
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

// Get single post content and frontmatter by slug
export function getPostBySlug(slug: string): {
  frontMatter: FrontMatter;
  content: string;
} {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    frontMatter: {
      ...(data as Omit<FrontMatter, "slug">),
      slug,
    },
    content,
  };
}

// For Next.js static params generation
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// For Next.js metadata generation per post
export function generateMetadata(slug: string) {
  const post = getPostBySlug(slug);
  const fm = post.frontMatter;

  return {
    title: fm.title,
    description: fm.description,
    openGraph: {
      images: [fm.image],
    },
  };
}
