import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  BLOG_SLUGS,
  type BlogSlug,
} from "@/content/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_POSTS[slug as BlogSlug];
  if (!article) {
    return {
      title: "Outwit — Blog",
    };
  }
  return {
    title: `Outwit — ${article.title}`,
    description: article.metaDescription,
    openGraph: {
      title: `${article.title} | Outwit`,
      description: article.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_POSTS[slug as BlogSlug];
  if (!article) notFound();

  const Body = article.body;

  return (
    <article className="bg-[#FAFAFA] px-6 py-16 text-slate-900 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-slate-600 transition-colors hover:text-neon-orange"
        >
          ← All posts
        </Link>

        <header className="mt-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon-orange">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {article.summary}
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            {article.readTime}
          </p>
        </header>

        <div className="mt-10 border-t border-slate-200 pt-10">
          <Body />
        </div>

        <footer className="mt-14 rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-600">
            <Link href="/blog" className="font-semibold text-neon-orange hover:underline">
              More posts
            </Link>
            {" · "}
            <Link href="/lab" className="font-semibold text-neon-orange hover:underline">
              Lab
            </Link>
            {" · "}
            <Link href="/projects" className="font-semibold text-neon-orange hover:underline">
              Projects
            </Link>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            If you&apos;re a local business in North Texas looking for hands-on marketing help, my
            team at{" "}
            <a
              href="https://boldspark.co"
              className="font-semibold text-neon-orange hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boldspark
            </a>{" "}
            does that work.
          </p>
        </footer>
      </div>
    </article>
  );
}
