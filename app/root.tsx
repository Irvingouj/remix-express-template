import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type MetaFunction,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./tailwind.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Template - A Modern Web Application" },
    { name: "description", content: "A modern web application template built with Remix, featuring authentication and Docker support." },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#3B82F6" },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Remix Template - A Modern Web Application" },
    { property: "og:description", content: "A modern web application template built with Remix, featuring authentication and Docker support." },
    { property: "og:site_name", content: "Remix Template" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Remix Template - A Modern Web Application" },
    { name: "twitter:description", content: "A modern web application template built with Remix, featuring authentication and Docker support." },
  ];
};

export default function App() {
  return (
    <html lang="en" className="text-[16px]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
