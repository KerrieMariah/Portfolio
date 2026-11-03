import Image from "next/image";
import Link from "next/link";
import styles from "./homepage-new.module.css";

const services = [
  { number: "01", title: "Custom software", text: "Purpose-built tools, portals and platforms that fit the way your business actually works." },
  { number: "02", title: "Dashboards & systems", text: "Clear, useful command centers that bring scattered data, tasks and decisions into one place." },
  { number: "03", title: "Commerce & web", text: "Shopify development and thoughtful digital experiences designed to work hard and look beautiful." },
  { number: "04", title: "Consulting", text: "A technical brain in the room to untangle an idea, choose the right approach and get it moving." },
];

const work = [
  { tag: "Local Service · Website", title: "Empire Garage Doors", text: "A Naples garage door company site built to turn local search into same-day repair calls and free estimates.", image: "/images/portfolio/empire-garage-doors.png" },
  { tag: "Restoration · Website", title: "DryZone Inc", text: "Water, mold, fire, and storm restoration across Southwest Florida, with emergency contact on the first screen.", image: "/images/portfolio/dryzone.png" },
  { tag: "Enterprise · Website", title: "PBP Solutions", text: "A technology firm site for designing, securing, and operating mission-ready systems.", image: "/images/portfolio/pbp-solutions.png" },
  { tag: "Marketing · Website", title: "SmartWays Marketing Group", text: "A consultancy site that makes a clear marketing strategy feel obvious, then turns it into booked calls.", image: "/images/portfolio/smartways-marketing.png" },
  { tag: "Commerce · Gifts", title: "Hallby", text: "A Shopify store for curated letterbox gifts, build-your-own boxes, and a monthly self-care subscription.", image: "/images/portfolio/hallby.png" },
  { tag: "Commerce · Self care", title: "Arthur Betsy", text: "A Shopify store for a British self-care brand, from bath soaks and candles to gift sets.", image: "/images/portfolio/arthur-betsy.png" },
  { tag: "Commerce · Brand", title: "MixMonsters", text: "A Shopify launch site for a customizable children's book series, where the child is the hero.", image: "/images/portfolio/mix-monsters.png" },
  { tag: "Wellness · Website", title: "Catskills Coherence Co", text: "A calm brand site for bioenergetic practitioner Ila Hubbard, her 1:1 work, and local pop-ups.", image: "/images/portfolio/catskills-coherence.png" },
  { tag: "Software · Operations", title: "Business command centers", text: "Custom dashboards connecting analytics, SEO, projects and recurring work into one useful view.", image: "/images/portfolio/graphdata.png" },
];

export const metadata = {
  title: "Kerrie Mariah | Software Engineer, Product Creator & Consultant",
  description: "Kerrie Mariah builds custom software, thoughtful systems, digital products and beautiful online experiences.",
};

export default function NewHomepage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/homepage-new">Kerrie Mariah</Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#products">Products</a><a href="#speaking">Speaking</a><a href="#about">About</a>
        </nav>
        <a className={styles.menuContact} href="#contact">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Software engineer <i /> Product creator <i /> Consultant</p>
          <h1>I turn good ideas into things people can <em>actually</em> use.</h1>
          <p className={styles.intro}>Custom software, thoughtful systems, digital products and the occasional beautifully overengineered idea.</p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#work">Explore my work <span>→</span></a>
            <a className={styles.secondaryButton} href="#contact">Work with me <span>↗</span></a>
          </div>
          <p className={styles.smallNote}>Complex problem? Excellent. Those are my favorite kind.</p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.sageShape} />
          <div className={styles.photoFrame}>
            <Image src="/images/links/prof.JPEG" alt="Kerrie Mariah" fill priority sizes="(max-width: 900px) 90vw, 44vw" />
          </div>
          <div className={styles.buildCard}>
            <span className={styles.cardLabel}>Currently building</span>
            <strong>Useful things, beautifully.</strong>
            <div className={styles.progress}><span /></div>
            <small>Always in progress</small>
          </div>
          <div className={styles.skillsCard}>
            <span className={styles.cardLabel}>A few things I do</span>
            <ul><li>Custom software</li><li>Product strategy</li><li>Business systems</li><li>Speaking & workshops</li></ul>
          </div>
        </div>
      </section>

      <section className={styles.marquee} aria-label="Areas of expertise">
        <span>Software</span><i>✦</i><span>Strategy</span><i>✦</i><span>Systems</span><i>✦</i><span>Products</span><i>✦</i><span>Good ideas</span>
      </section>

      <section className={styles.about} id="about">
        <div className={styles.sectionLabel}>A little difficult to put in one box</div>
        <div className={styles.aboutCopy}>
          <h2>I build technology, businesses and the occasional side quest.</h2>
          <div className={styles.aboutColumns}>
            <p>I&apos;m Kerrie, a software engineer and product creator with a knack for turning complicated business problems into clear, useful tools.</p>
            <p>I&apos;ve built for global banks, growing businesses and ideas of my own. I also consult, teach and speak about making technology feel a lot less intimidating.</p>
          </div>
          <a className={styles.textLink} href="#contact">The longer version of my story <span>→</span></a>
        </div>
      </section>

      <section className={styles.workSection} id="work">
        <div className={styles.sectionHeading}>
          <div><span className={styles.sectionLabel}>Selected work</span><h2>Things I&apos;ve made useful.</h2></div>
          <Link className={styles.textLink} href="/portfolio">View the full archive <span>→</span></Link>
        </div>
        <div className={styles.workGrid}>
          {work.map((item, index) => (
            <article className={styles.workCard} key={item.title}>
              <div className={styles.workImage}><Image src={item.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
              <div className={styles.workMeta}><span>{item.tag}</span><span>0{index + 1}</span></div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.servicesIntro}><span className={styles.sectionLabel}>Ways to work together</span><h2>Bring me the messy idea.</h2><p>You don&apos;t need a perfect specification. We can start with the problem, a voice note, or the spreadsheet everyone quietly hates.</p></div>
        <div className={styles.serviceList}>
          {services.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className={styles.products} id="products">
        <div className={styles.productPanel}>
          <span className={styles.sectionLabel}>The product shelf</span>
          <h2>Not everything I build is for a client.</h2>
          <p>I create software, courses and digital products when I spot a problem that deserves a better answer.</p>
          <a className={styles.secondaryButton} href="#contact">See what I&apos;m building <span>→</span></a>
        </div>
        <div className={styles.productStack} aria-hidden="true"><div>PASS YOUR PVOC <small>Study smarter</small></div><div>KMA LABS <small>Experiments & tools</small></div><div>NEXT IDEA <small>Loading...</small></div></div>
      </section>

      <section className={styles.speaking} id="speaking">
        <span className={styles.sectionLabel}>Speaking & teaching</span>
        <blockquote>“Technology is most powerful when people can actually understand it.”</blockquote>
        <div><p>I give practical, energetic talks and workshops about software, digital products, building in public and turning ideas into real things.</p><a className={styles.textLink} href="#contact">Invite me to speak <span>↗</span></a></div>
      </section>

      <section className={styles.contact} id="contact">
        <p>Have an idea you can&apos;t quite explain yet?</p>
        <h2>That&apos;s usually where I come in.</h2>
        <a href="mailto:hello@kerriemariah.com">hello@kerriemariah.com <span>↗</span></a>
      </section>

      <footer className={styles.footer}><span>© {new Date().getFullYear()} Kerrie Mariah</span><div><a href="https://www.instagram.com/kerrie_mariah/">Instagram</a><a href="https://www.linkedin.com/in/kerriemariah/">LinkedIn</a></div><span>Florida, USA</span></footer>
    </main>
  );
}