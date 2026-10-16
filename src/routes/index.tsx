import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { SiteHeader, SiteFooter } from "@/components/BTLLayout";

export const Route = createFileRoute("/")({ component: Index });

const plans = [
  {name:"Home Starter",speed:"20 Mbps",price:"৳800",note:"Everyday browsing, study and social use"},
  {name:"Home Plus",speed:"40 Mbps",price:"৳1,200",note:"Streaming, remote work and multi-device homes",popular:true},
  {name:"Fiber Pro",speed:"60 Mbps",price:"৳1,600",note:"Power users, gaming and heavy household use"},
  {name:"Business",speed:"Custom",price:"Contact",note:"SME, office and dedicated requirements"},
];

function Index(){return <>
  <SiteHeader/>
  <main className="home-page">
    <section className="journey-shell"><div className="journey-brand"><img src="/assets/brand/btl-logo.png" alt="BTL Internet"/><div><p className="bangla">সহজ সংযোগ, প্রতিদিন</p><div className="hero-actions"><Link to="/new-connection" className="hero-primary">নতুন সংযোগ</Link><Link to="/coverage" className="hero-secondary">Coverage Check</Link></div></div></div><ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme}/></section>
    <section className="coverage-strip"><div><span>Coverage checker</span><h2>আপনার এলাকায় BTL Internet আছে?</h2></div><form action="/coverage" method="get"><label>Area or address<input name="q" placeholder="Area, upazila or address" /></label><button type="submit">Check Availability</button></form></section>
    <section className="section plans-section"><div className="section-head"><h2>Internet plans for everyday life</h2><p>Clear plan choices for home and business. Final availability and charges depend on your service area.</p></div><div className="plan-rail">{plans.map(p=><article className={`plan-card ${p.popular?"popular":""}`} key={p.name}>{p.popular&&<span className="plan-badge">Popular</span>}<h3>{p.name}</h3><strong>{p.speed}</strong><div className="plan-price">{p.price}<small>/month</small></div><p>{p.note}</p><Link to="/new-connection" search={{plan:p.name} as any}>Choose Plan</Link></article>)}</div></section>
    <section className="benefit-band"><div><strong>High Speed</strong><span>Fiber-first performance</span></div><div><strong>Reliable Network</strong><span>Built for daily use</span></div><div><strong>Dedicated Support</strong><span>Local service team</span></div><div><strong>Wide Coverage</strong><span>Growing through partners</span></div></section>
    <section className="section split-visual"><div className="visual-frame"><img src="/assets/content/rural-service-cover.png" alt="BTL Internet connectivity in a rural community"/></div><div className="split-copy"><p className="eyebrow">Home Internet</p><h2>সংযোগ যা ঘরের প্রতিদিনের কাজকে সহজ করে</h2><p>Online classes, streaming, gaming, social media and remote work, all on one dependable connection.</p><Link to="/packages" className="text-link">Home plans দেখুন</Link></div></section>
    <section className="business-band"><div className="business-copy"><h2>Business connectivity that stays practical</h2><p>SME Internet, corporate broadband, dedicated connectivity, static IP options and responsive network support.</p><Link to="/business">Business Contact</Link></div><img src="/assets/content/urban-service-cover.png" alt="Business and fiber internet service"/></section>
    <section className="section reseller-panel"><div><p className="eyebrow">Partner network</p><h2>Grow with BTL Internet</h2><p>Build local coverage with wholesale plans, customer-management visibility, billing controls and partner support.</p></div><div className="reseller-list"><span>Wholesale plans</span><span>Own customer view</span><span>Billing visibility</span><span>Partner support</span></div><Link to="/reseller">Become a Reseller</Link></section>
    <section className="section steps"><h2>Connection in four clear steps</h2><div className="step-line"><div><b>01</b><h3>Check Coverage</h3></div><div><b>02</b><h3>Select Package</h3></div><div><b>03</b><h3>Submit Application</h3></div><div><b>04</b><h3>Installation & Activation</h3></div></div></section>
    <section className="support-cta"><div><h2>Need help with your connection?</h2><p>Create a support ticket for internet, billing, router or new-connection issues.</p></div><Link to="/support">Open Ticket</Link></section>
  </main><SiteFooter/><Link to="/new-connection" className="mobile-sticky-cta">নতুন সংযোগ</Link></>}
