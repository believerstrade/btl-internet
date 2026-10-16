import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function BrandMark() {
  return <Link to="/" className="brand-mark" aria-label="BTL Internet home"><img src="/assets/brand/btl-logo.png" alt="BTL Internet" /></Link>;
}

export function SiteHeader() {
  return <header className="site-header"><div className="nav-shell"><BrandMark/><nav className="desktop-nav" aria-label="Primary"><Link to="/">Home</Link><Link to="/packages">Packages</Link><Link to="/coverage">Coverage</Link><Link to="/business">Business</Link><Link to="/reseller">Reseller</Link><Link to="/support">Support</Link><Link to="/about">About</Link></nav><Link to="/login" className="nav-login">Login</Link><Link to="/new-connection" className="nav-cta">নতুন সংযোগ</Link><details className="mobile-menu"><summary aria-label="Open menu">Menu</summary><div><Link to="/packages">Packages</Link><Link to="/coverage">Coverage</Link><Link to="/business">Business</Link><Link to="/reseller">Reseller</Link><Link to="/support">Support</Link><Link to="/about">About</Link><Link to="/login">Login</Link></div></details></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid"><div><BrandMark/><p className="bangla">সহজ সংযোগ, প্রতিদিন</p><p>Fast, reliable fiber internet for home, business and local communities.</p></div><div><h3>Services</h3><Link to="/packages">Home Internet</Link><Link to="/business">Business Internet</Link><Link to="/reseller">Reseller</Link><Link to="/coverage">Coverage</Link></div><div><h3>Support</h3><Link to="/support">Open Ticket</Link><Link to="/new-connection">New Connection</Link><Link to="/login">Customer Login</Link><a href="#policies">Policies</a></div><div><h3>Company</h3><Link to="/about">About BTL Internet</Link><p>BTRC / license information should be published here where applicable.</p></div></div><div className="footer-bottom">© {new Date().getFullYear()} BTL Internet. All rights reserved.</div></footer>;
}

export function PageShell({ children }: { children: ReactNode }) { return <><SiteHeader/><main>{children}</main><SiteFooter/><Link to="/new-connection" className="mobile-sticky-cta">নতুন সংযোগ</Link></>; }

export function PageHero({eyebrow,title,body,children}:{eyebrow?:string;title:string;body:string;children?:ReactNode}) { return <section className="page-hero"><div className="content-wrap"><div className="page-hero-copy">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p>{body}</p>{children}</div></div></section>; }
