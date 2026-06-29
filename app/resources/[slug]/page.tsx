import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { HeroHeader } from "@/components/header";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { title, category, dek, author, type, readTime, related, Body } = article;

  return (
    <>
      <HeroHeader />

      <div className="rsc-wrap-article pt-28">
        <header className="post-header">
          <div className="kicker rise d1">{category}</div>
          <h1 className="rise d2">{title}</h1>
          <p className="post-dek rise d3">{dek}</p>
          <div className="post-meta rise d4">
            <span>By <b>{author}</b></span>
            <span>{type}</span>
            <span>{readTime}</span>
          </div>
        </header>

        <article className="article-body">
          <Body />

          <div className="more">
            <div className="lbl">Keep reading</div>
            {related.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`}>
                {r.title}
              </Link>
            ))}
          </div>

          <footer className="article-footer">
            Startup Template
          </footer>
        </article>
      </div>
    </>
  );
}
