import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "./before-after";
import LeadForm from "./lead-form";
import MobileCta from "./mobile-cta";
import styles from "./seo-revamp.module.css";

const pains = [
  { text: "Your website looks outdated, or is hard to use on a phone.", icon: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 15h2" },
  { text: "Customers search for what you do, and can't find you on Google.", icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.6-1.9L20 20" },
  { text: "ChatGPT and Google's AI recommend your competitors instead.", icon: "M4 5h16v11H9l-5 4V5Zm4 5h8M8 13h5" },
  { text: "You pay for marketing but can't tell if it's working.", icon: "M4 20V10m6 10V4m6 16v-7m4 7H2" },
];

const recentWork = [
  { name: "Empire Garage Doors", url: "https://www.empiregaragedoorsofnaples.com/" },
  { name: "DryZone Inc", url: "https://www.dryzoneinc.net/" },
  { name: "Goofy Waves", url: "https://www.goofywaves.com/" },
  { name: "SmartWays Marketing", url: "https://smartwaysmarketinggroup.com/" },
  { name: "PBP Solutions", url: "https://pbpsolutions.tech/" },
  { name: "Hallby", url: "https://hallby.co.uk/" },
  { name: "Arthur Betsy", url: "https://www.arthurbetsy.co.uk/" },
];

const pipeline = [
  { title: "Meet", text: "Coffee in Naples or at your business. No pressure.", price: "Free", icon: "M7 8h10v5a5 5 0 0 1-10 0V8Zm10 1h1.5a2.5 2.5 0 0 1 0 5H17M6 20h12" },
  { title: "Audit", text: "I review your site, Google presence and competitors.", price: "Free", icon: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm4.6-1.9L20 20" },
  { title: "Revamp", text: "I rebuild your website: fast, modern and mobile-first.", price: "$290", icon: "M4 5h16v11H4zM9 20h6M12 16v4M8 9h5M8 12h8" },
  { title: "Grow", text: "Every month I help more customers find you.", price: "$450/mo", icon: "M4 18l5-6 4 3 7-9M15 6h5v5" },
];

const stack = [
  { title: "A brand-new website", text: "Modern, fast, and built to turn visitors into calls.", value: "$290", was: "$800+" },
  { title: "Show up on Google", text: "Rank higher in Google search and Google Maps around Naples.", value: "Included" },
  { title: "Get recommended by AI", text: "Be the business ChatGPT, Gemini and Google's AI suggest.", value: "Included" },
  { title: "A simple monthly report", text: "What improved and what's next, in plain English.", value: "Included" },
  { title: "Real meetings in Naples", text: "Sit down with me face to face, not a call center.", value: "Included" },
];

const work = [
  { title: "Empire Garage Doors", place: "Naples, FL", text: "Built to turn local searches into same-day repair calls.", image: "/images/portfolio/empire-garage-doors.png" },
  { title: "DryZone Inc", place: "Southwest Florida", text: "Emergency restoration with the call button front and center.", image: "/images/portfolio/dryzone.png" },
];

const faqs = [
  { q: "Why is the website only $290?", a: "Because it comes with the monthly plan. A site like this normally starts at $800. Pairing it with ongoing SEO lets me build it for a fraction of that, and it means your new site actually gets seen." },
  { q: "Is there a contract?", a: "Just a 3-month minimum on the monthly plan. After that it's month-to-month and you can cancel anytime. SEO usually takes around 90 days to show real results, so three months is a fair test for both of us." },
  { q: "What will I pay in the first 3 months?", a: "$290 for the website, plus $450 a month. That's $1,640 total for the first three months, then $450 a month after that, cancellable anytime after the first three months." },
  { q: "What does \"recommended by AI\" mean?", a: "More customers now ask ChatGPT, Gemini and Google's AI things like \"who's the best plumber in Naples?\" I set up your website and listings so those tools understand, trust and mention your business." },
  { q: "Is the audit really free?", a: "Yes. We meet, I look at your website and how you show up online, and you get honest recommendations. No obligation to sign up." },
];

export const metadata = {
  title: "$290 Website Revamp + Local SEO for Naples, FL Businesses | Kerrie Mariah",
  description: "A full website revamp for $290 with local and AI SEO for $450/month. Monthly reporting included, and we meet in person in Naples, Florida.",
  alternates: { canonical: "/seo-revamp" },
  openGraph: {
    title: "A website you're proud of, built here in Naples.",
    description: "$290 full website revamp with local + AI SEO for $450/month. Free in-person audit in Naples.",
    url: "/seo-revamp",
    images: ["/images/about/about-img.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "$290 Website Revamp + Local SEO for Naples, FL Businesses",
    description: "$290 full website revamp with local + AI SEO for $450/month. Free in-person audit in Naples.",
    images: ["/images/about/about-img.jpg"],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kerrie Mariah",
  url: "https://kerriemariah.com/seo-revamp",
  image: "https://kerriemariah.com/images/about/about-img.jpg",
  email: "kerrie@kerriemariah.com",
  areaServed: { "@type": "City", name: "Naples" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naples",
    addressRegion: "FL",
    addressCountry: "US",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Website revamp",
      price: "290",
      priceCurrency: "USD",
      description: "A brand-new, mobile-first website.",
    },
    {
      "@type": "Offer",
      name: "Local and AI SEO",
      price: "450",
      priceCurrency: "USD",
      description: "Per month, with reporting. 3-month minimum, then month-to-month.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const BOOKING_URL = "https://schedule.kerriemariah.com/in-person-website-audit";

function SectionCta({ note }) {
  return (
    <div className={styles.sectionCta}>
      <a className={styles.primaryButton} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book my free audit <span>→</span></a>
      {note && <small>{note}</small>}
    </div>
  );
}

export default function SeoRevampPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <a className={styles.topBar} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        Naples &amp; SWFL business owners: get a <strong>free, in-person website audit</strong> <span>→</span>
      </a>

      <div className={styles.darkTop}>
        <header className={styles.header}>
          <Link className={styles.wordmark} href="/">Kerrie Mariah</Link>
          <a className={styles.headerCta} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a free audit <span>↗</span></a>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>For Naples &amp; Southwest Florida businesses</p>
            <h1>A website you&apos;re proud of.</h1>
            <p className={styles.heroLead}>
              I&apos;ll rebuild your website for $290 and help more local customers find you on Google and in AI search. We start with a free audit over coffee.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book my free audit <span>→</span></a>
              <a className={styles.secondaryButton} href="#offer">See what&apos;s included</a>
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
      </div>

      <div className={styles.proofStrip}>
        <span>Recent work</span>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[0, 1].map((copy) => (
              <div key={copy} className={styles.marqueeGroup} aria-hidden={copy === 1 || undefined}>
                {recentWork.map((site) => (
                  <a
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={copy === 1 ? -1 : undefined}
                  >
                    {site.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.pain}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Sound familiar?</span>
          <h2>Your website should be bringing you customers.</h2>
        </div>
        <div className={styles.painBody}>
          <div className={styles.painPhoto}>
            <Image
              src="/images/seo-revamp/frustrated-owner.jpg"
              alt="A frustrated business owner with her head in her hand at a laptop"
              fill
              sizes="(max-width: 700px) 92vw, 540px"
            />
          </div>
          <ul className={styles.painList}>
            {pains.map((pain) => (
              <li key={pain.text}>
                <span className={styles.painIcon}>
                  <Icon path={pain.icon} />
                  <b>✕</b>
                </span>
                {pain.text}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.bridge}>I fix all four. Here&apos;s how it works.</p>
      </section>

      <section className={styles.how} id="how">
        <div className={styles.howPerson} aria-hidden="true">
          <Image src="/images/slider/person1.png" alt="" fill sizes="(max-width: 700px) 46vw, 380px" />
        </div>
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
        <SectionCta note="Step one is free. No obligation." />
      </section>

      <section className={styles.offer} id="offer">
        <div className={styles.offerHead}>
          <span className={styles.sectionLabel}>The offer</span>
          <h2>Here&apos;s exactly what you get.</h2>
        </div>
        <div className={styles.offerCard}>
          <ul className={styles.stack}>
            {stack.map((item) => (
              <li key={item.title}>
                <span className={styles.stackCheck}>✓</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <strong>
                  {item.was && <s>{item.was}</s>}
                  {item.value}
                </strong>
              </li>
            ))}
          </ul>
          <div className={styles.priceBox}>
            <div>
              <span>Website revamp</span>
              <strong>$290 <small>one-time</small></strong>
            </div>
            <i>+</i>
            <div>
              <span>Google &amp; AI search plan</span>
              <strong>$450 <small>/month</small></strong>
            </div>
          </div>
          <p className={styles.offerTerms}>
            <strong>3-month minimum, then month-to-month.</strong> Cancel anytime after your first three months.
          </p>
          <a className={styles.primaryButton} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book my free audit <span>→</span></a>
          <p className={styles.offerNote}>We start with a free audit. You only sign up if it makes sense.</p>
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
        <SectionCta />
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
          <div className={styles.letterLinks}>
            <a className={styles.textLink} href="https://www.linkedin.com/in/kerriemariah/" target="_blank" rel="noopener noreferrer">
              Connect with me on LinkedIn <span>↗</span>
            </a>
            <a className={styles.textLink} href="mailto:kerrie@kerriemariah.com">Email me</a>
          </div>
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
          <a className={styles.emailLink} href="mailto:kerrie@kerriemariah.com">kerrie@kerriemariah.com</a>
          <ul>
            <li><span>✓</span>Free audit of your current site</li>
            <li><span>✓</span>$290 full website revamp</li>
            <li><span>✓</span>Meet in person in Naples</li>
          </ul>
          <p className={styles.scarcity}>
            Because I meet every client in person, I only take on a few new businesses each month.
          </p>
          <a className={styles.textLink} href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Prefer to pick a time? Book a call <span>↗</span>
          </a>
        </div>
        <LeadForm />
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Kerrie Mariah &amp; Associates, LLC · Naples, Florida</span>
        <span>
          <Link href="/privacy-policy">Privacy policy</Link> · <Link href="/terms-of-service">Terms</Link> · Photo:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Frustrated_woman_working_on_laptop_in_a_bright_kitchen.jpg" target="_blank" rel="noopener noreferrer">Shixart1985</a>,{" "}
          <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">CC BY 2.0</a>
        </span>
      </footer>

      <MobileCta />
    </main>
  );
}
