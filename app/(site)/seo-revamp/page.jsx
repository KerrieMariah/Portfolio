import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "./before-after";
import LeadForm from "./lead-form";
import MobileCta from "./mobile-cta";
import styles from "./seo-revamp.module.css";

const pipeline = [
  { title: "Meet", text: "Coffee in Naples or at your business. No pressure.", price: "Free", icon: "M7 8h10v5a5 5 0 0 1-10 0V8Zm10 1h1.5a2.5 2.5 0 0 1 0 5H17M6 20h12" },
  { title: "Audit", text: "I review your site, Google presence and competitors.", price: "Free", icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.6-1.9L20 20" },
  { title: "Revamp", text: "I rebuild your website: fast, modern and mobile-first.", price: "$290", icon: "M4 5h16v11H4zM9 20h6M12 16v4M8 9h5M8 12h8" },
  { title: "Grow", text: "Local + AI SEO every month, with a clear report.", price: "$450/mo", icon: "M4 18l5-6 4 3 7-9M15 6h5v5" },
];

const included = [
  "Full website revamp",
  "Local SEO for Naples & Southwest Florida",
  "AI SEO for ChatGPT, Gemini & Google AI",
  "Technical & on-page SEO",
  "Monthly plain-English report",
  "In-person meetings in Naples",
];

const work = [
  { title: "Empire Garage Doors", place: "Naples, FL", text: "Built to turn local searches into same-day repair calls.", image: "/images/portfolio/empire-garage-doors.png" },
  { title: "DryZone Inc", place: "Southwest Florida", text: "Emergency restoration with the call button front and center.", image: "/images/portfolio/dryzone.png" },
];

const faqs = [
  { q: "Why is the website only $290?", a: "Because it comes with the SEO plan. A site like this normally starts at $800. Pairing it with monthly SEO lets me build it for a fraction of that, and it means your new site actually gets seen." },
  { q: "Is there a contract?", a: "Just a 3-month minimum on the SEO plan. After that it's month-to-month and you can cancel anytime. SEO usually takes around 90 days to show real results, so three months is a fair test for both of us." },
  { q: "What will I pay in the first 3 months?", a: "$290 for the website revamp, plus $450 a month for SEO. That's $1,640 total for the first three months, then $450 a month after that." },
  { q: "What is AI SEO?", a: "More customers now ask ChatGPT, Gemini and Google's AI for recommendations. AI SEO structures your site and listings so those tools understand, trust and mention your business." },
  { q: "Can we really meet in person?", a: "Yes, I'd honestly prefer it. I meet clients across Naples, at your business or over coffee. Video calls work too." },
];

const reportBars = [34, 42, 39, 55, 61, 58, 72, 80, 94];

export const metadata = {
  title: "$290 Website Revamp + Local & AI SEO for Naples, FL Businesses | Kerrie Mariah",
  description: "A full website revamp for $290 with local and AI SEO for $450/month. Monthly reporting included, and we meet in person in Naples, Florida.",
  openGraph: {
    title: "A website you're proud of, built here in Naples.",
    description: "$290 full website revamp with local + AI SEO for $450/month. Reporting included. Meet in person in Naples.",
    images: ["/images/about/about-img.jpg"],
  },
};

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export default function SeoRevampPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">Kerrie Mariah</Link>
        <nav className={styles.nav} aria-label="Page sections">
          <a href="#how">How it works</a>
          <a href="#included">What&apos;s included</a>
          <a href="#work">Work</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className={styles.headerCta} href="#start">Book a free audit <span>↗</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Naples &amp; Southwest Florida</p>
          <h1>A website you&apos;re proud of. <em>Built here in Naples.</em></h1>
          <p className={styles.heroLead}>
            I&apos;ll rebuild your website for $290 and help more local customers find you on Google and in AI search. We start with a free audit over coffee.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#start">Book my free audit <span>→</span></a>
            <a className={styles.secondaryButton} href="#how">See how it works</a>
          </div>
          <ul className={styles.heroFacts}>
            <li><strong>$290</strong>Full website revamp</li>
            <li><strong>$450</strong>Per month SEO</li>
            <li><strong>3 mo</strong>Then month-to-month</li>
          </ul>
        </div>

        <figure className={styles.heroVisual}>
          <div className={styles.heroPhoto}>
            <Image
              src="/images/about/about-img.jpg"
              alt="Kerrie going over a website with a business owner in person"
              fill
              priority
              sizes="(max-width: 1100px) 92vw, 46vw"
            />
          </div>
          <figcaption>Going over a site in person, the way it should be.</figcaption>
          <div className={styles.heroNote}>
            <strong>Free audit,</strong>
            <span>over coffee. On me.</span>
          </div>
        </figure>
      </section>

      <section className={styles.how} id="how">
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>How it works</span>
          <h2>Simple, and in person.</h2>
        </div>
        <ol className={styles.pipeline}>
          {pipeline.map((step, index) => (
            <li key={step.title} className={index >= 2 ? styles.pipelinePaid : undefined}>
              <div className={styles.pipelineIcon}><Icon path={step.icon} /></div>
              <span className={styles.pipelineNumber}>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <b>{step.price}</b>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.included} id="included">
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>What&apos;s included</span>
          <h2>Everything you need to get found.</h2>
        </div>

        <div className={styles.bento}>
          <article className={`${styles.tile} ${styles.tileAi}`}>
            <div className={styles.chat} aria-hidden="true">
              <p className={styles.chatQuestion}>Who&apos;s the best plumber in Naples?</p>
              <div className={styles.chatAnswer}>
                <span className={styles.chatAvatar}>AI</span>
                <p>A top local option is <mark>Your Business</mark>, known for fast, friendly service and great reviews.</p>
              </div>
              <span className={styles.chatSource}>Source · yourbusiness.com</span>
            </div>
            <h3>AI SEO</h3>
            <p>Get mentioned when customers ask AI for a recommendation.</p>
          </article>

          <article className={`${styles.tile} ${styles.tileLocal}`}>
            <div className={styles.listings} aria-hidden="true">
              <div className={styles.listingTop}><span>📍</span> plumber near me</div>
              <div className={styles.listingYou}><b>1</b><span>Your Business</span><em>★★★★★</em></div>
              <div><b>2</b><span>Competitor</span><em>★★★★</em></div>
              <div><b>3</b><span>Competitor</span><em>★★★</em></div>
            </div>
            <h3>Local SEO</h3>
            <p>Rank in Google Maps and local search across Southwest Florida.</p>
          </article>

          <article className={`${styles.tile} ${styles.tileReport}`}>
            <div className={styles.report} aria-hidden="true">
              <div className={styles.reportHead}>
                <span>Monthly report</span>
                <em>Sample</em>
              </div>
              <div className={styles.reportBars}>
                {reportBars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
              <div className={styles.reportStats}>
                <span><b>Visits</b>↑</span>
                <span><b>Calls</b>↑</span>
                <span><b>Rank</b>↑</span>
              </div>
            </div>
            <h3>Clear reporting</h3>
            <p>One simple report a month: what improved and what&apos;s next.</p>
          </article>

          <article className={`${styles.tile} ${styles.tilePhoto}`}>
            <Image src="/images/seo-revamp/naples-pier.jpg" alt="Naples Pier at sunset" fill sizes="(max-width: 800px) 100vw, 50vw" />
            <div>
              <h3>A real person, right here in Naples.</h3>
              <p>Sit down face to face. No call centers, no runaround.</p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.offer} id="offer">
        <div className={styles.offerCopy}>
          <span className={styles.sectionLabel}>The offer</span>
          <h2>One simple plan.</h2>
          <p>A website that looks the part, and the SEO to make sure people actually see it.</p>
        </div>
        <div className={styles.offerCard}>
          <div className={styles.offerLine}>
            <span>Full website revamp <small>one-time</small></span>
            <strong>$290 <s>$800+</s></strong>
          </div>
          <div className={`${styles.offerLine} ${styles.offerMain}`}>
            <span>Local + AI SEO</span>
            <strong>$450<small>/month</small></strong>
          </div>
          <ul>
            {included.map((item) => <li key={item}><span>✓</span>{item}</li>)}
          </ul>
          <p className={styles.offerTerms}>
            <strong>3-month minimum, then month-to-month.</strong> Cancel anytime after your first three months.
          </p>
          <a className={styles.primaryButton} href="#start">Book my free audit <span>→</span></a>
        </div>
      </section>

      <section className={styles.work} id="work">
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Local work</span>
          <h2>Built for businesses like yours.</h2>
        </div>
        <div className={styles.compareWrap}>
          <BeforeAfter />
          <p className={styles.compareCaption}>Drag the slider to see a typical before and after.</p>
        </div>
        <div className={styles.workGrid}>
          {work.map((item) => (
            <article key={item.title} className={styles.workCard}>
              <div className={styles.workImage}>
                <Image src={item.image} alt={`${item.title} website`} fill sizes="(max-width: 800px) 100vw, 45vw" />
              </div>
              <span className={styles.workPlace}>{item.place}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <figure className={styles.quote}>
          <blockquote>&ldquo;Working with Kerrie was an absolute game-changer for our business. She is efficient, incredibly knowledgeable, and went above and beyond.&rdquo;</blockquote>
          <figcaption>Paul Harrison, QuboHub</figcaption>
        </figure>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutPhoto}>
          <Image src="/images/links/prof.JPEG" alt="Kerrie Mariah" fill sizes="(max-width: 900px) 90vw, 36vw" />
        </div>
        <div className={styles.letter}>
          <span className={styles.sectionLabel}>A quick note from me</span>
          <h2>Hi, I&apos;m Kerrie.</h2>
          <p>
            Before I built websites for local businesses, I was a software engineer at Deutsche Bank and BNP Paribas. These days I&apos;d rather sit across the table from you, hear how your business actually works, and build something that brings in customers.
          </p>
          <p>No jargon, no call centers, no disappearing after launch. Just me, and a plan that makes sense.</p>
          <Image className={styles.signature} src="/images/about/signature.png" alt="Kerrie Mariah's signature" width={180} height={70} />
          <ul className={styles.creds}>
            <li>Former Deutsche Bank / BNP Paribas engineer</li>
            <li>Softr Certified Professional</li>
            <li>University of Florida, cum laude</li>
          </ul>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Questions</span>
          <h2>Good to know.</h2>
        </div>
        <div className={styles.faqList}>
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}<span>+</span></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.start} id="start">
        <div className={styles.startCopy}>
          <span className={styles.sectionLabel}>Get started</span>
          <h2>Let&apos;s grab a coffee.</h2>
          <p>Answer three quick questions and I&apos;ll reach out to set up a time to meet.</p>
          <ul>
            <li><span>✓</span>Free audit of your current site</li>
            <li><span>✓</span>$290 full website revamp</li>
            <li><span>✓</span>Meet in person in Naples</li>
          </ul>
          <a className={styles.textLink} href="https://tidycal.com/kerriemariah/15-minute-meeting" target="_blank" rel="noopener noreferrer">
            Prefer to pick a time? Book a call <span>↗</span>
          </a>
        </div>
        <LeadForm />
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Kerrie Mariah &amp; Associates, LLC · Naples, Florida</span>
        <span>
          Pier photo:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Naples_Pier_At_Sunset_Florida_United_States_Travel_Photography_(194139203).jpeg" target="_blank" rel="noopener noreferrer">Giuseppe Milo</a>,{" "}
          <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>
        </span>
      </footer>

      <MobileCta />
    </main>
  );
}
