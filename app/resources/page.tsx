import Link from "next/link";
import { articles } from "@/lib/articles";
import { HeroHeader } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Notes on short-form video, the discovery gap, and building AI that understands an audience instead of averaging it.",
};

const featured = articles.find((a) => a.isFeatured)!;
const grid = articles.filter((a) => !a.isFeatured);

export default function ResourcesPage() {
  return (
    <>
      <HeroHeader />

      <div className="rsc-wrap pt-28">
        <div className="masthead">
          <h1 className="rise d1">Built for<br />the scroll.</h1>
          <p className="rise d3">
            Your best content already exists. It&rsquo;s sitting in a two-hour episode
            nobody found. We write about why that happens, how we&rsquo;re fixing it,
            and what it actually takes to turn a catalog into a discovery engine.
          </p>
        </div>

        <Link className="feature rise d3" href={`/resources/${featured.slug}`}>
          <div className="art">
            <div className="ribbon">Launch</div>
            <video
              src="/commercial.mov"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
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
          <span>Don&rsquo;t be the missed scroll</span>
        </div>
      </footer>
    </>
  );
}
