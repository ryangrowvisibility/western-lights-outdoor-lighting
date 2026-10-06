const PHONE = "(905) 288-7440";
const TEL = "tel:+19052887440";
const SMS = "sms:+19052887440";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Western%20Lights%20Outdoor%20Lighting&query_place_id=ChIJMwhnEMBV1UoRQE1UHTHAymU";
const FB = "https://www.facebook.com/WesternLightsCo";

const ICONS: Record<string, string> = {
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  bulb: "M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14",
  home: "M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  tree: "M12 22v-4M7 18h10l-3.5-4.5H16L12 8l-1 1.5M12 8 8 13.5h2.5L7 18M12 2v2",
  path: "M4 22c2-6 6-8 8-12s1-6 0-8M14 22c1-4 4-6 6-9M9 13h.01M7 18h.01M16 18h.01",
  zap: "M13 2 3 14h9l-1 8 10-12h-9z",
  party: "M5.8 11.3 2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10M22 13l-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98-.7.1-1.22.72-1.22 1.43V7M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2z",
  pen: "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z",
  check: "M20 6 9 17l-5-5",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  repeat: "m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  sparkle: "M12 3l1.9 5.8L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.2z",
  ruler: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0zM14.5 12.5l2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2",
  arrow: "M5 12h14M12 5l7 7-7 7",
  chevron: "m6 9 6 6 6-6",
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

function LightString() {
  const colors = ["bg-cta", "bg-berry", "bg-brand-soft", "bg-cta", "bg-berry", "bg-brand-soft", "bg-cta", "bg-berry", "bg-brand-soft", "bg-cta", "bg-berry"];
  return (
    <div className="relative h-8" aria-hidden="true">
      <svg viewBox="0 0 400 24" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-6 w-full text-brand/40"><path d="M0 4 Q 20 18 40 4 T 80 4 T 120 4 T 160 4 T 200 4 T 240 4 T 280 4 T 320 4 T 360 4 T 400 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
      <div className="absolute inset-x-0 top-2.5 flex justify-around px-2">
        {colors.map((c, i) => (
          <span key={i} className={`bulb h-3.5 w-2.5 rounded-b-full ${c} shadow-[0_0_10px_2px_oklch(0.85_0.14_85/0.55)]`} />
        ))}
      </div>
    </div>
  );
}

const services = [
  { icon: "home", name: "Christmas & Holiday Light Installation", text: "Professional installation of holiday lights on your home, from rooflines to decorative displays. Customers say Matt and Stefan saved Christmas, and many book again year after year.", featured: true },
  { icon: "tree", name: "Landscape Lighting", text: "Lighting for gardens, pathways and outdoor features that makes your yard usable after dark and shows off the parts you are proudest of." },
  { icon: "bulb", name: "Outdoor Home Lighting", text: "Exterior lighting planned around your property, so the front of your home looks welcoming and the walkways and entrances are easy to see." },
  { icon: "zap", name: "LED Lighting", text: "High-quality, energy-efficient LED systems that run bright for longer and cost less to keep on through the season." },
  { icon: "party", name: "Event Lighting", text: "Custom lighting set-ups for parties, celebrations and special occasions. Tell us the date and the feel you want, and we will plan the rest." },
  { icon: "pen", name: "Custom Lighting Design", text: "A one-stop shop for anything that lights up. Have an idea that does not fit a category? Just ask, and Matt and Stefan will work out how to do it." },
];

const reviews = [
  { name: "Zoe S.", job: "Christmas lights", text: "Amazing company. Professional, high-quality materials, on time and friendly. Matt and Stefan saved Christmas for our family, and we will be booking again." },
  { name: "Cassandra L.", job: "Christmas light install", text: "Accurate quotes and excellent, detailed work. The installation looked very professional and clean. We are booking again." },
  { name: "Joe F.", job: "Repeat customer, two seasons", text: "Matt and Stefan are hard-working and focused on customer service and professionalism. We have used them two years running." },
  { name: "Leah J.", job: "Christmas lights", text: "Blown away by the install Stefan and Matt completed. We will rebook next Christmas." },
  { name: "Shayna M.", job: "Lighting", text: "The lighting was amazing, and the two of them were incredibly professional throughout." },
  { name: "Matthew S.", job: "Lighting project", text: "Very communicative through the whole project. Highly recommend." },
];

const steps = [
  { icon: "phone", title: "Call or text", text: `Reach us at ${PHONE}. Tell us about your home and what you would like lit up.` },
  { icon: "ruler", title: "Accurate quote", text: "We look at the house, plan the layout with you and give you a clear, accurate price." },
  { icon: "calendar", title: "Install day", text: "Matt and Stefan arrive on time and install everything cleanly and carefully." },
  { icon: "sparkle", title: "Lights on", text: "We switch everything on and make sure it looks right before we leave. Then you just enjoy it." },
];

const faqs = [
  { q: "When should I book my Christmas light installation?", a: "As early as you can. Holiday installs are seasonal, and the best dates fill up through October and November. Calling now gets your home on the schedule before the rush." },
  { q: "What areas do you serve?", a: `We work with homeowners across the 905 area. Call or text ${PHONE} with your address and we will confirm we cover your street.` },
  { q: "Do you supply the lights?", a: "Customers specifically mention the high-quality materials we use. We will walk you through the options when we put together your quote." },
  { q: "How much does it cost?", a: "Every home is different, so we quote each job individually. Customers describe our quotes as accurate, meaning the price we give you is the price you pay." },
  { q: "Can you do lighting outside the holiday season?", a: "Yes. Landscape lighting, outdoor home lighting, LED systems and event lighting are available year-round. If it lights up, just ask." },
  { q: "Who will be doing the installation?", a: "Matt and Stefan, the two names you will see in nearly every review. They handle the work themselves and keep you updated through the whole project." },
  { q: "Can I book you again next year?", a: "Absolutely. Many of our customers rebook every Christmas. Let us know when you call and we will keep your home on our list." },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Western Lights Outdoor Lighting",
    telephone: "+1-905-288-7440",
    description: "Christmas and holiday light installation, landscape lighting, outdoor lighting, LED and event lighting.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "7" },
    sameAs: [FB],
    hasMap: MAPS,
    address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
    makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">Skip to content</a>

      <div className="bg-brand-dark text-[0.95rem] text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-center gap-2 px-5 py-2 text-center md:px-6">
          <Icon name="calendar" className="h-4 w-4 text-cta" />
          <span>Now booking holiday light installs for this season. <a href={TEL} className="font-bold text-cta underline underline-offset-2">Reserve your date</a></span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Western Lights home">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-cta"><Icon name="bulb" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-heading text-[1.25rem] font-extrabold text-ink">Western Lights</span>
              <span className="block text-[0.85rem] font-semibold text-muted">Holiday &amp; Outdoor Lighting</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden items-center gap-2 font-bold text-ink hover:text-brand md:flex"><Icon name="phone" className="h-5 w-5 text-brand" />{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center rounded-full bg-cta px-6 font-bold text-on-cta hover:bg-cta-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand sm:inline-flex">Book an Install</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-full bg-cta text-on-cta sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-up">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-[0.95rem] font-bold text-brand">
                <Icon name="users" className="h-4 w-4" />Installed by Matt &amp; Stefan
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-ink">
                Christmas Light Installation &amp; Outdoor Lighting in the <span className="text-brand">905 Area</span>
              </h1>
              <p className="mt-5 max-w-[56ch] text-[1.2rem] text-muted">
                Skip the ladder this year. We design and install clean, professional holiday lights, plus landscape, LED and event lighting, with accurate quotes and installers who show up on time.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-cta px-7 text-[1.1rem] font-bold text-on-cta shadow-[0_10px_24px_-12px_oklch(0.7_0.14_80/0.9)] hover:bg-cta-dark">
                  <Icon name="phone" className="h-5 w-5" />Call {PHONE}
                </a>
                <a href={SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border-2 border-brand px-7 text-[1.1rem] font-bold text-brand hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" />Text for a quote
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /> 5.0 on Google</span>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">7 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Repeat customers every Christmas</span>
              </div>
            </div>

            <figure className="fade-up-2 overflow-hidden rounded-3xl border border-line bg-card shadow-[0_24px_50px_-30px_oklch(0.27_0.055_160/0.55)]">
              <div className="bg-brand px-7 pb-6 pt-3">
                <LightString />
                <p className="mt-3 font-heading text-[1.5rem] font-extrabold text-white">&ldquo;Matt and Stefan saved Christmas for our family.&rdquo;</p>
              </div>
              <div className="p-7">
                <Stars />
                <blockquote className="mt-3 text-ink">Professional, high-quality materials, on time and friendly. We will be booking again next year.</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta font-bold text-on-cta">ZS</span>
                  <span><span className="block font-bold">Zoe S.</span><span className="block text-[0.95rem] text-muted">Christmas lights · Google review</span></span>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers choose Western Lights" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "sparkle", label: "Rated 5.0 on Google" },
              { icon: "ruler", label: "Accurate, upfront quotes" },
              { icon: "clock", label: "On-time, friendly installers" },
              { icon: "repeat", label: "Customers rebook every year" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cta text-on-cta"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span className="font-bold leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <p className="font-bold text-gold">Our services</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">If it lights up, we can install it</h2>
              <p className="mt-4 text-muted">Holiday lighting is what most customers call us for, but we light homes, yards and events all year. Here is what Western Lights handles.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`lift flex flex-col rounded-2xl border p-6 ${s.featured ? "border-brand bg-brand text-white sm:col-span-2 lg:col-span-1 lg:row-span-1" : "border-line bg-card"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-xl ${s.featured ? "bg-cta text-on-cta" : "bg-brand-soft text-brand"}`}><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-cta px-3 py-1 text-[0.82rem] font-bold text-on-cta">Most popular</span>}
                  </div>
                  <h3 className="mt-5 text-[1.3rem]">{s.name}</h3>
                  <p className={`mt-2 flex-1 ${s.featured ? "text-white/85" : "text-muted"}`}>{s.text}</p>
                  <a href={TEL} className={`mt-5 inline-flex items-center gap-1.5 font-bold ${s.featured ? "text-cta" : "text-brand hover:text-brand-dark"}`}>Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-bold text-gold">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Rated 5.0 from 7 Google reviews</h2>
                <p className="mt-3 max-w-[60ch] text-muted">Customers name Matt and Stefan in almost every review, for punctual, friendly service and clean, detailed installs they rebook every season.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full border-2 border-brand bg-card px-5 font-bold text-brand hover:bg-brand-soft">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r, i) => (
                <figure key={r.name} className={`lift flex flex-col rounded-2xl border border-line bg-card p-6 ${["border-t-4 border-t-cta", "border-t-4 border-t-berry", "border-t-4 border-t-brand"][i % 3]}`}>
                  <Stars className="h-[18px] w-[18px]" />
                  <blockquote className="mt-4 flex-1">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <span className="block font-bold">{r.name}</span>
                    <span className="block text-[0.95rem] text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-6 text-[0.95rem] text-muted">Monica also wrote that the team did a wonderful, efficient job on her Christmas lights and she is booking again. Reviews paraphrased from Google for length.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-bold text-gold">About Western Lights</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Two installers who treat your home like their own</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Western Lights is a one-stop shop for custom lighting, run by Matt and Stefan. Most of our customers find us in the fall, when they want their home lit up for the holidays without spending a weekend on a ladder.</p>
                <p>We plan the layout with you, give you an accurate quote, and install everything cleanly with quality materials. When the work is done, it looks professional from the street and up close.</p>
                <p>The best measure of how we work is who comes back. Several of our customers have booked us two seasons running and plan to keep going. Outside the holidays, we put the same care into landscape lighting, LED systems and event set-ups.</p>
              </div>
              <a href={TEL} className="btn mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cta px-6 font-bold text-on-cta hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" />Call Matt &amp; Stefan at {PHONE}</a>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "clock", title: "On time", text: "Customers mention punctual installers who show up when they said they would.", tone: "bg-cta text-on-cta" },
                { icon: "ruler", title: "Accurate quotes", text: "The price we quote is the price you pay. No surprises after install day.", tone: "bg-brand text-white" },
                { icon: "check", title: "Clean, detailed work", text: "Reviewers describe installs that look very professional and clean, right down to the details.", tone: "bg-berry text-white" },
                { icon: "message", title: "Great communication", text: "You stay in the loop from the first call through the final switch-on.", tone: "bg-brand-soft text-brand" },
              ].map((d) => (
                <div key={d.title} className="rounded-2xl border border-line bg-card p-6">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${d.tone}`}><Icon name={d.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-[1.2rem]">{d.title}</h3>
                  <p className="mt-1.5 text-muted">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="font-bold text-gold">How it works</p>
            <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Your home lit up in four easy steps</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-line bg-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-[1.2rem] font-extrabold text-cta">{i + 1}</span>
                    <Icon name={s.icon} className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-4 text-[1.2rem]">{s.title}</h3>
                  <p className="mt-1.5 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold text-gold">Service area</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Lighting up homes across the 905</h2>
              <p className="mt-4 text-muted">We install for homeowners around the Greater Toronto and Hamilton Area. Routes fill up quickly in holiday season, so the fastest way to check is to call or text your address and preferred install date.</p>
              <a href={SMS} className="btn mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-brand px-5 font-bold text-brand hover:bg-brand-soft"><Icon name="pin" className="h-5 w-5" />Text us your address</a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <iframe title="Map of the Greater Toronto and Hamilton Area" src="https://maps.google.com/maps?q=Greater%20Toronto%20and%20Hamilton%20Area&z=9&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <p className="font-bold text-gold">FAQ</p>
            <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.7rem)]">Questions before you book</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border border-line bg-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[1.1rem] font-bold">
                    {f.q}
                    <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-brand-dark text-white">
          <div className="mx-auto max-w-[1200px] px-5 pt-6 md:px-6"><LightString /></div>
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 pb-16 pt-8 md:flex-row md:items-center md:px-6 md:pb-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)]">Get on the holiday install schedule</h2>
              <p className="mt-3 max-w-[52ch] text-[1.15rem] text-white/85">Call or text Matt and Stefan at {PHONE} for an accurate quote. We open at 8 a.m., and the best dates go first.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-cta px-7 text-[1.1rem] font-bold text-on-cta hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
              <a href={SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border-2 border-white/70 px-7 text-[1.1rem] font-bold text-white hover:bg-white/10"><Icon name="message" className="h-5 w-5" />Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div>
            <p className="font-heading text-[1.3rem] font-extrabold">Western Lights Outdoor Lighting</p>
            <p className="mt-2 text-[0.98rem] text-muted">Christmas, landscape, LED and event lighting by Matt and Stefan.</p>
            <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Western Lights on Facebook" className="mt-4 grid h-11 w-11 place-items-center rounded-xl border border-line text-brand hover:bg-brand-soft"><Icon name="facebook" className="h-5 w-5" /></a>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-[0.98rem] text-muted">
              <li><a href={TEL} className="hover:text-brand">{PHONE}</a></li>
              <li>Opens 8 a.m.</li>
              <li>Serving the 905 area, Ontario</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">View on Google Maps</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-bold">Services</p>
            <ul className="mt-3 grid gap-2 text-[0.98rem] text-muted sm:grid-cols-2">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 text-[0.9rem] text-muted md:px-6">© {new Date().getFullYear()} Western Lights Outdoor Lighting.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 p-2.5 backdrop-blur md:hidden">
        <a href={TEL} className="btn flex min-h-12 items-center justify-center gap-2 rounded-full bg-cta font-bold text-on-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand font-bold text-brand"><Icon name="message" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
