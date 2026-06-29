import Link from "next/link";
import { articles } from "@/lib/articles";
import { HeroHeader } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, tutorials, and documentation to help you get the most out of the Startup Template.",
};

const featured = articles.find((a) => a.isFeatured)!;
const grid = articles.filter((a) => !a.isFeatured);

export default function ResourcesPage() {
  return (
    <>
      <HeroHeader />

      <div className="rsc-wrap pt-28">
        <div className="masthead">
          <h1 className="rise d1">Resources</h1>
          <p className="rise d3">
            Guides, tutorials, and documentation to help you customize
            and deploy your site.
          </p>
        </div>

        <Link className="feature rise d3" href={`/resources/${featured.slug}`}>
          <div className="art">
            <div className="ribbon">Featured</div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <span className="text-white/20 text-6xl font-instrument-serif">Guide</span>
            </div>
          </div>
          <div className="body">
            <div className="cat">{featured.category}</div>
            <h2>{featured.title}</h2>
            <div className="meta">
              By <b>{featured.author}</b>&nbsp;·&nbsp;{featured.readTime}
            </div>
          </div>
        </Link>

        <div className="art-grid">
          {grid.map((article) => (
            <Link key={article.slug} className="card" href={`/resources/${article.slug}`}>
              <div className="cat">{article.category}</div>
              <h3>{article.title}</h3>
              <div className="meta">
                By <b>{article.author}</b>&nbsp;·&nbsp;{article.readTime}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="rsc-footer">
        <div className="foot">
          <span>Startup Template</span>
          <span>Resources &amp; Guides</span>
        </div>
      </footer>
    </>
  );
}
