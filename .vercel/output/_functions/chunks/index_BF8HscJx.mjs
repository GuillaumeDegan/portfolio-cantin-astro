import { c as createComponent } from './astro-component_DEj9kcyR.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderComponent } from './entrypoint_lPZ9y68-.mjs';
import 'clsx';
import { s as sanity, $ as $$Layout } from './Layout_BZ9qXHkk.mjs';
/* empty css               */

const $$WorkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WorkCard;
  const { work } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="work-card"${addAttribute(`/works/${work.slug.current}`, "href")}${addAttribute(work.title, "data-title")} data-astro-cid-r7kjq4ip> <img class="work-card__image"${addAttribute(work.coverImage.url, "src")}${addAttribute(work.coverImage.alt, "alt")} loading="lazy" decoding="async" data-astro-cid-r7kjq4ip> </a>`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/components/WorkCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  function youtubeBackgroundEmbedUrl(link) {
    let videoId = "";
    try {
      const u = new URL(link.trim());
      if (u.hostname === "youtu.be") {
        videoId = u.pathname.replace(/^\//, "").split("/")[0] ?? "";
      } else if (u.hostname.endsWith("youtube.com")) {
        if (u.pathname.startsWith("/embed/")) {
          videoId = u.pathname.replace(/^\/embed\//, "").split("/")[0] ?? "";
        } else {
          videoId = u.searchParams.get("v") ?? "";
        }
      }
    } catch {
    }
    if (!videoId) return link.trim();
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      playsinline: "1",
      modestbranding: "1",
      rel: "0",
      loop: "1",
      playlist: videoId
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }
  const category = Astro2.url.searchParams.get("category");
  const categories = await sanity.fetch(`
  *[_type == "category"]{
    title,
    "slug": slug.current
  }
`);
  const works = await sanity.fetch(
    `*[_type == "project" ${category ? `&& $category in categories[]->slug.current` : ""}]{
    title,
    "categories": categories[]->{
      title,
      "slug": slug.current
    },
    coverImage{
      "url": asset->url,
      alt
    },
    slug{
      current
    }
  }`,
    { category }
  );
  const videoBackgroundUrl = await sanity.fetch(`
*[_type == "homeBackgroundVideo" && _id == "homeBackgroundVideo"][0]{
  url
  }
  `);
  const embedSrc = youtubeBackgroundEmbedUrl(videoBackgroundUrl?.url ?? "");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="video-hero" aria-hidden="true"> <div class="video-hero__frame"> <iframe${addAttribute(embedSrc, "src")} title="Vidéo d’accueil" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> </div> </section> <section id="works"> <div class="filters"> <a href="/#works"${addAttribute(!category ? "active" : "", "class")}>All</a> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/?category=${cat.slug}#works`, "href")}${addAttribute(category === cat.slug ? "active" : "", "class")}> ${cat.title} </a>`)} </div> <div style="display: flex; align-items: center; flex-direction: row; flex-wrap: wrap;"> ${works.map((work) => renderTemplate`${renderComponent($$result2, "WorkCard", $$WorkCard, { "work": work })}`)} </div> </section> ` })}`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
