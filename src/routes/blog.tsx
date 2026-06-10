import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Sigarenmagazijn 2 Amsterdam" },
      { name: "description", content: "Stories, guides and tips from our shop in the heart of Amsterdam — cigars, tobacco, IQOS and the best of the city." },
      { property: "og:title", content: "Blog — Sigarenmagazijn 2" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
