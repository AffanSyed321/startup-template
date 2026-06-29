import React from "react";

export interface Article {
  slug: string;
  title: string;
  category: string;
  dek: string;
  author: string;
  readTime: string;
  type: string;
  isFeatured?: boolean;
  related: { title: string; slug: string }[];
  Body: React.FC;
}

const LaunchBody: React.FC = () => (
  <>
    <figure>
      <video
        src="/commercial.mov"
        className="clip-video"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    </figure>

    <p className="lead">
      <span className="drop">A</span>
      I content is everywhere, and most of it looks the same. Teams are stitching together half a dozen tools to generate clips, captions, and avatars, and the output is interchangeable. It trends for a day and disappears. It does not understand the audience it was made for. That sameness has a name now. People call it AI slop.
    </p>

    <p>The shift is already happening. The audiences are on short-form video. The content is stuck in audio. As Will Pearson of iHeartMedia put it:</p>

    <div className="pull">
      &ldquo;Podcasting has moved into video, social, and other platforms.&rdquo;
      <span className="attribution">Will Pearson, iHeartMedia</span>
    </div>

    <p>That gap is the reason we built this platform.</p>

    <h2>The problem is not making clips. It is making clips that work.</h2>

    <p>Long-form creators are sitting on a goldmine they cannot use. Podcasters, radio hosts, and video shows produce hours of content every week, and almost none of it reaches the short-form feeds where new audiences actually discover them. The distance between a two-hour episode and a fifteen-second clip that performs is brutal to cross. It takes an editor, a sense of pacing, and an instinct for what lands. Most creators do not have the time, and the generic tools do not have the judgment.</p>

    <p>So the content stays buried. The audience never finds it. The scroll moves on.</p>

    <figure className="before-after-fig">
      <div className="ba-label-pill">
        <strong>Planet Money Podcast · NPR</strong>
        <span className="ba-sep">|</span>
        <span>29 minute episode</span>
      </div>
      <div className="ba-grid">
        <div className="ba-col ba-before">
          <div className="ba-tag">Before (Audio only)</div>
          <div className="ba-video-wrap">
            <video src="/before.mp4" autoPlay loop muted playsInline />
          </div>
        </div>
        <div className="ba-arrow">→</div>
        <div className="ba-col ba-after">
          <div className="ba-tag ba-tag-accent">After (With Our Platform)</div>
          <div className="ba-video-wrap">
            <video src="/demo-after.mov" autoPlay loop muted playsInline />
          </div>
        </div>
      </div>
      <figcaption>Two hours in. A clip that performs out.</figcaption>
    </figure>

    <h2>What we built, and why it is different</h2>

    <p>Our Platform takes any long-form content you have: podcasts, radio shows, interviews, lectures, and turns it into short-form video that is ready to post. We give an audio-only show a face. We add captions, visuals, music, and pacing built for the scroll.</p>

    <p>The difference is what sits underneath. Our Platform is not trained on what is trending across the entire internet. It learns what wins in your niche, and the more you use it, the sharper your clips get. A finance show and a comedy podcast do not perform for the same reasons, and a tool that treats them the same produces slop for both. We treat them differently on purpose.</p>

    <div className="band">One platform. Every format. Built for the scroll. <em>No editor, no studio, no fixing your hair.</em></div>

    <h2>Who it is for</h2>

    <p>Our Platform is for anyone with a library of long-form content and no realistic way to turn it into short-form at scale: independent podcasters, radio networks, and video shows alike. We are already in conversations with some of the largest names in audio, and we open new pilot programs every week.</p>

    <h2>What we believe</h2>

    <p>AI should be a partner and a collaborator, not a slop machine, and not a replacement for the people who make content meaningful. The only barrier to creating should be the idea itself. Everything else is friction worth removing.</p>

    <p>For every creator sitting on hours of work the world has never heard, that gap is the thing we exist to close.</p>

    <div className="tagline">Don&rsquo;t be the<br /><span>missed scroll.</span></div>

    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:ceo@example.com">Get in touch</a>
    </div>
  </>
);

const AiSlopBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">T</span>here is a growing pile of AI-generated content that all feels the same. The same captions, the same stock motion, the same hollow hook. We call it slop, and we talk about it like weather, as if it simply happens to us. It does not. Slop is a choice.
    </p>

    <h2>The choice is to optimize for the average</h2>

    <p>When you build on a model trained on the entire internet and ask it to make something, it returns the most probable version of that thing. The most probable version is, by definition, the least surprising. It is the average of everything anyone has ever posted. And the average has never once stopped a scroll.</p>

    <p>The tools then made that average free. When a clip costs nothing to produce, people make a thousand of them and ship all thousand. Volume went up, quality went down, and the feed filled with content that technically exists and effectively does not.</p>

    <div className="pull">A model that knows the average of the internet will give you slop. That is not a bug. It is the assignment.</div>

    <h2>The fix is not less AI. It is more specific AI.</h2>

    <p>A model that knows what works for your audience, specifically, will give you something they actually want to watch. The difference is not the technology. It is what you point the technology at. Aim it at everyone and you get content for no one. Aim it at a real audience and it starts to earn attention again.</p>

    <p>That is the whole argument behind how we built Our Platform. AI should make the good stuff easier to make, not the forgettable stuff easier to flood. It should be a collaborator that raises the floor for people with something to say, not a machine that drowns them out. The only barrier to creating should be the idea itself. Everything else is friction, and slop is just friction wearing a new disguise.</p>

    <div className="band">The future of AI content is not more of it. <em>It is better of it, made for someone in particular.</em></div>

    <p>That is a choice too. We made it on purpose.</p>

    <div className="tagline">Don&rsquo;t be the<br /><span>missed scroll.</span></div>
    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:ceo@example.com">Get in touch</a>
    </div>
  </>
);

const ContextEngineBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">M</span>ost media organizations have already tried AI clip tools. Most found the same thing: the output is technically functional but editorially off. The clips exist. They just do not perform.
    </p>

    <p>These tools take your episode and run it through a general-purpose model. They surface the moments that would perform best on average, across every creator, category, and platform at once. An NPR politics show and a true crime podcast go into the same machine. The hook that earns a subscriber on one kills engagement on the other. Generic AI clip tools do not distinguish between the two, because they were never trained to.</p>

    <div className="pull">The problem is not that AI makes bad clips. It is that AI makes average clips. And average has never once earned a new subscriber.</div>

    <h2>What niche-trained AI actually means</h2>

    <p>Before Our Platform processes a single episode, we build a performance model specific to your content category, analyzing what actually earned watch time, shares, and follows for audio and video shows like yours. When your episode comes in, the system is not guessing. It is matching against what works for your audience specifically. The clips that come back are shorter, sharper, and built for the feed your audience actually uses.</p>

    <p>A good clip takes hours of scrubbing and the judgment of an experienced editor who knows your audience. That is slow and expensive, which is why most back catalogs just get buried. Our Platform does the same job in minutes, across your entire library.</p>

    <div className="pull">It is not a content generator. It is an editorial intelligence trained on your audience.</div>

    <figure>
      <video
        src="/clip.mp4"
        className="clip-video"
        autoPlay
        muted
        loop
        playsInline
      />
    </figure>

    <h2>The compounding advantage</h2>

    <p>Every clip published returns a signal: what held attention, what was skipped, what drove follows. After the first month, the model knows your audience better than a new hire would. After six months, it outperforms the instincts of editors who have never watched your back catalog. For organizations managing multiple shows, each property develops its own profile. A daily news program and a long-form investigative series are never treated as the same product.</p>

    <p>Here is one of our creators. <a href="https://www.youtube.com/@dr.beckyspelman/featured" target="_blank" rel="noopener noreferrer">Dr. Becky Spelman</a>, a psychology and mental health podcaster, grew from 103K to 128K subscribers between March and June 2026. Her average Shorts views moved from 472 to 1.2K over the same period. Same creator. Same content. A model that learned what her audience actually stops for.</p>

    <div className="band">Volume of output is a commodity now. <em>Editorial precision at scale is the defensible advantage.</em></div>

    <div className="tagline">Don&rsquo;t be the<br /><span>missed scroll.</span></div>
    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:ceo@example.com">Send us one episode</a>
    </div>
  </>
);

const DiscoveryGapBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">T</span>he most loyal audiences in media are built on long-form. People who listen to a two-hour show every week are not casual fans. They are devoted. But devotion does not scale on its own, because long-form is a terrible discovery engine.
    </p>

    <p>You do not find a new two-hour podcast by stumbling into hour one. Discovery happens on the feed, in the fifteen-second window where a stranger decides whether you are worth their attention. Short-form is the front door. Long-form is the house. Most creators have built a beautiful house with no front door.</p>

    <h2>The best material stays locked inside the wrong format</h2>

    <p>A single weekly episode can produce dozens of short-form moments worth watching. Almost none of them get made. The reason is not laziness. It is that turning long-form into short-form that actually performs is a real job, one that takes editing skill, an instinct for the scroll, and time most creators simply do not have.</p>

    <p>So the gap sits there, quietly expensive. The best material in the world stays trapped in formats that cannot travel. The creator keeps the audience they already have and never meets the one they could have had.</p>

    <div className="pull">The library is the asset. The clip is how anyone finds it.</div>

    <h2>Short-form is not marketing. It is the discovery layer.</h2>

    <p>The teams that win the next few years will be the ones who stop treating short-form as promotion for their long-form, and start treating it as the discovery layer the whole business depends on. The episode is where you earn loyalty. The clip is where you earn the chance to.</p>

    <p>That is the gap we are closing at Our Platform. Not because clips are the point, but because discovery is, and right now the front door is shut for almost everyone who deserves to be found.</p>

    <div className="band">Build the house all you want. <em>Someone still has to open the door.</em></div>

    <div className="tagline">Don&rsquo;t be the<br /><span>missed scroll.</span></div>
    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:ceo@example.com">Get in touch</a>
    </div>
  </>
);

const PilotBody: React.FC = () => (
  <>
    <p className="lead">
      <span className="drop">W</span>e are early, and we run our first creators through white-glove pilots so we learn as much as they do. The promise is simple. You bring the content you already made. We turn it into short-form that earns attention. Here is what that looks like, start to finish, with the specifics that matter.
    </p>

    <h2><span className="step">Step one</span>It starts with what you already have</h2>
    <p>A back catalog of episodes. A weekly show. A radio archive gathering dust. The content already exists, which means the hard creative work is already done. The problem has only ever been turning it into something the feed will actually reward.</p>

    <h2><span className="step">Step two</span>The engine reads the episode like a sharp editor</h2>
    <p>It looks for the moments that stop a scroll. Not the moments you assume are important. The moments your audience will. For an audio-only show, this is also where it gets a face: visuals, captions, and pacing built for muted, vertical viewing. The two hours go in. The candidates come back.</p>

    <div className="pull">The work that used to take an editor a full day takes minutes.</div>

    <h2><span className="step">Step three</span>One episode becomes a week of short-form</h2>
    <p>You get a set of clips, ready to post, each shaped for the platform it will live on. No editor booked. No studio time. No second pass to fix your hair. The library that was sitting still is suddenly a week of content.</p>

    <h2><span className="step">Step four</span>Then the part that compounds</h2>
    <p>You post. The clips perform or they do not, and that signal comes back into the engine. Week two is sharper than week one, because the system now knows a little more about what your audience specifically rewards. The tool does not stay the same. It learns you.</p>

    <p>The math is the whole point. The content that used to stay buried gets seen. The creator goes from sitting on a library to running a discovery machine. That is the gap we built Our Platform to close, and we open new pilots every week.</p>

    <div className="band">Hours of work you already made. <em>Finally let the world hear it.</em></div>

    <div className="tagline">Don&rsquo;t be the<br /><span>missed scroll.</span></div>
    <div className="rsc-cta">
      <a className="rsc-btn" href="mailto:ceo@example.com">Get in touch</a>
    </div>
  </>
);

export const articles: Article[] = [
  {
    slug: "platform-launch",
    title: "How We Turn Long-Form Podcasts Into Short-Form Video That Actually Gets Watched",
    category: "Announcement",
    dek: "Podcast networks and media companies are sitting on thousands of hours of content no new audience will ever find. Our Platform is the AI built to change that.",
    author: "Affan Syed",
    type: "Product & GTM",
    readTime: "5 min read",
    isFeatured: true,
    related: [
      { title: "Niche-Trained AI: Why Your Clips Should Not Be Built for Everyone", slug: "context-engine" },
      { title: "The Discovery Gap: Why Great Podcasts Never Find a New Audience on Social Media", slug: "discovery-gap" },
    ],
    Body: LaunchBody,
  },
  {
    slug: "context-engine",
    title: "Niche-Trained AI: Why Your Clips Should Not Be Built for Everyone",
    category: "How It Works",
    dek: "Every generic AI tool is trained on the whole internet. That is exactly why the clips it makes for your show feel like they were made for someone else's.",
    author: "Affan Syed",
    type: "Product",
    readTime: "4 min read",
    related: [
      { title: "Why AI Content Floods the Feed But Never Earns Attention", slug: "ai-slop" },
      { title: "The Discovery Gap: Why Great Podcasts Never Find a New Audience on Social Media", slug: "discovery-gap" },
    ],
    Body: ContextEngineBody,
  },
  {
    slug: "ai-slop",
    title: "Why AI Content Floods the Feed But Never Earns Attention",
    category: "Point of View",
    dek: "The wave of forgettable AI content is not an accident. It is the predictable result of building on models that optimize for the average. And the average never stopped a scroll.",
    author: "Affan Syed",
    type: "Essay",
    readTime: "4 min read",
    related: [
      { title: "Niche-Trained AI: Why Your Clips Should Not Be Built for Everyone", slug: "context-engine" },
      { title: "How We Turn Long-Form Podcasts Into Short-Form Video That Actually Gets Watched", slug: "platform-launch" },
    ],
    Body: AiSlopBody,
  },
  {
    slug: "discovery-gap",
    title: "The Discovery Gap: Why Great Podcasts Never Find a New Audience on Social Media",
    category: "Industry",
    dek: "Long-form builds loyalty. Short-form builds reach. Most podcast networks and media companies are only doing one, and the gap is costing them.",
    author: "Affan Syed",
    type: "POV",
    readTime: "4 min read",
    related: [
      { title: "Niche-Trained AI: Why Your Clips Should Not Be Built for Everyone", slug: "context-engine" },
      { title: "From a Two-Hour Episode to a Week of Short-Form Content: What Our Process Looks Like", slug: "pilot" },
    ],
    Body: DiscoveryGapBody,
  },
  {
    slug: "pilot",
    title: "From a Two-Hour Episode to a Week of Short-Form Content: What Our Process Looks Like",
    category: "Use Case",
    dek: "We run new clients through white-glove pilots. Here is exactly what happens when a podcast episode goes in, and what comes out the other side.",
    author: "Affan Syed",
    type: "Product",
    readTime: "4 min read",
    related: [
      { title: "The Discovery Gap: Why Great Podcasts Never Find a New Audience on Social Media", slug: "discovery-gap" },
      { title: "Niche-Trained AI: Why Your Clips Should Not Be Built for Everyone", slug: "context-engine" },
    ],
    Body: PilotBody,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
