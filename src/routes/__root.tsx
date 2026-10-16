import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";
import appMetaJson from "../app-meta.json";

type AppMeta = { og_title?: string | null; og_description?: string | null; og_image_url?: string | null; favicon_url?: string | null; };
const appMeta = appMetaJson as AppMeta;
const title = appMeta.og_title ?? "BTL Internet";
const description = appMeta.og_description ?? "Fast, reliable fiber internet for home, business and local communities.";
const ogImage = appMeta.og_image_url ?? "/assets/brand/og-wide.jpg";
const favicon = appMeta.favicon_url ?? "/assets/brand/favicon-32.png";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "theme-color", content: "#011F43" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: favicon },
      { rel: "apple-touch-icon", href: "/assets/brand/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <main className="simple-state"><h1>Page not found</h1><p>The page you requested is not available.</p><Link to="/">Return home</Link></main>,
  errorComponent: () => <main className="simple-state"><h1>Something went wrong</h1><p>Please try again or return to the homepage.</p><a href="/">Return home</a></main>,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
