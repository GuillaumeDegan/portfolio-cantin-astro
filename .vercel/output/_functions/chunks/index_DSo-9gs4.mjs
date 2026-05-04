import { c as createComponent } from './astro-component_k7IPlCxR.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderHead, o as renderComponent, p as renderSlot } from './entrypoint_Dt3QlGSq.mjs';
import 'clsx';
import { createClient } from '@sanity/client';

const $$WorkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WorkCard;
  const { work } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="work-card"${addAttribute(`/works/${work.slug.current}`, "href")}${addAttribute(work.title, "data-title")} data-astro-cid-r7kjq4ip> <img class="work-card__image"${addAttribute(work.coverImage.url, "src")}${addAttribute(work.coverImage.alt, "alt")} loading="lazy" decoding="async" data-astro-cid-r7kjq4ip> </a>`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/components/WorkCard.astro", void 0);

const sanity = createClient({
  projectId: "fhumllcy",
  dataset: "production",
  apiVersion: "2026-03-29",
  useCdn: true
});

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const footerInfos = await sanity.fetch(`
*[_type == "footerInfos" && _id == "footerInfos"][0]{
  email,
  socials[]{
    url,
    image{
    "assetUrl": asset->url,
      alt
    }
  }
}
`);
  const { email, socials } = footerInfos;
  return renderTemplate`${maybeRenderHead()}<div style="height: 200px; align-items: center; justify-content: center; display: flex; flex-direction: column;"> <div style="display: flex; flex-direction: row; gap: 20px; align-items: center;"> ${socials.map((social) => renderTemplate`<a${addAttribute(social.url, "href")}> <img${addAttribute(social.image.assetUrl, "src")}${addAttribute(social.image.alt, "alt")} width="20"> </a>`)} </div> <a${addAttribute(`mailto:${email}`, "href")} style="text-decoration: none;"><p style="color: #fff;">${email}</p></a> </div>`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/components/Footer.astro", void 0);

const logoWhiteUrl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Calque_1'%20data-name='Calque%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201552.63%201946'%20fill='%23ffffff'%3e%3cpath%20d='M625.79,438.18c-22.46-38.67-46.1-79.38-69.9-120.37-3.02-5.21-10.18-6.12-14.39-1.81-8.92,9.1-22.7,24.32-32.91,36.49-4.07,4.85-11.7,4.19-14.87-1.28-31.18-53.88-144.19-277.57-166.95-338.91-2.44-6.59,3.17-13.33,10.09-12.15,75.32,12.9,413.33,81.75,478.46,96.76,93.73,21.6,291.02,76.41,391.16,108.85,10.63,3.45,6.93,19.31-4.13,17.7-132.15-19.29-426.31-77.25-512.85-100.4-35.22-9.42-207.21-39.37-260.93-44.41-7.23-.68-12.3,6.98-8.87,13.38,25.9,48.36,70.81,126.87,89.28,156.43,3.42,5.48,11.29,5.72,15.1.51,13.76-18.83,40.66-49.26,57.28-64.81,4.68-4.38,12.31-2.65,14.68,3.31,11.84,29.76,34.43,99.75,44.2,136.78,1.66,6.29,9.17,8.88,14.34,4.94,36.27-27.66,99.19-67.92,135.97-88.14,8.49-4.67,17.43,5.35,11.84,13.26-33.1,46.89-113.4,139.94-162.46,185.95-4.28,4.02-11.18,3.01-14.12-2.07Z'/%3e%3cpath%20d='M681.31,1443.7c-22.46,9.67-48.75,5.48-66.16-11.69-2.06-2.03-3.94-4.19-5.58-6.52-95.09-135.28-189.13-271.32-283-407.46-15.05-21.82-28.56-46.83,1.01-66.89,32.85-22.28,43.65,7.44,58.18,28.12,81.54,116.04,165.06,230.74,244.21,348.38,22.74,33.8,41.42,38.19,75.73,20.52,91.88-47.3,184.42-93.45,278.04-137.18,83.82-39.16,169-75.51,254.67-110.43,2.06-.84,4.27-1.33,6.58-1.55,21.64-2.06,37.79,19.65,30.58,40.16-4.33,12.32-9.48,23.57-18.16,30.19-22,16.76-54.38,19.18-81.02,30.71-120.09,51.95-240.62,103.05-359.07,158.55-43.78,20.51-81.98,52.77-123.37,78.63-3.94,2.46-8.12,4.52-12.64,6.47Z'/%3e%3cpath%20d='M863.6,558.46c63.9-19.4,309.81-23,268.93,215.43-5.5,32.07-13.93,63.84-22.84,95.24-34.01,119.89-231.86,155.01-311.49,71.69-71.03-69.48-63.83-335.78,65.4-382.36ZM797.95,778.97c-3.6,107.96,81.04,157.63,129.55,159.54,87.23,3.44,159.82-82.69,166.74-178.73,6.33-87.88-93.53-159.32-184.73-169.14-81.57,0-108.59,93.22-111.56,188.33Z'/%3e%3cpath%20d='M354.89,696.38c.16-124.77,73.45-210.45,178.32-209.31,140.34,1.53,198.24,84.24,208.25,184,14.56,145.03-96.03,237.9-199.12,234.66-112.6-3.53-187.61-82.89-187.45-209.35ZM399.7,662.61c-.02,41.22-16.77,68.02,45.58,153.54,32.43,44.48,92.47,53.84,137.95,43.18,48.77-11.43,115.16-78.91,115.16-122.36,0-135.55-60.61-181.37-155.94-184.73-96.06-3.39-142.72,34.04-142.75,110.36Z'/%3e%3cpath%20d='M867.64,1761.14c-115.92-15.51-30.74-178.5-38.78-253.55-9.07-39.32,50.12-61.28,55.13-17.6,4.45,58.99-41.73,148.22,21.46,185.41,135.38,43.69,121.91,246.54-30.1,250.7-44.2,3.27-87.68,15.85-131.88,19.9-70.91-5.79-92-77.03,85.65-82.62,96,5.98,139.16-88.77,38.51-102.24Z'/%3e%3cpath%20d='M226.47,1816.43c.49,39.75,86.61-14.22,84.64,23.13-11.9,99.12-176.65,119.66-150.72-8.18-13.64-156.49,111.87-104.97,140.98-213.33,10.49-71.2,12.79-143.58,23.46-214.75,100.45-119.3,71.12,348.31-15.1,329.31-59.98,6.01-68.1,29.29-83.26,83.82Z'/%3e%3cpath%20d='M139.01,888.53c3.98-5.2-83.58-87.97-70.57-117.3,30.62-69.03,180.12,156.48,124.12,213.51-42.53,43.31-179.11,128.9-191.55,97.89-12.29-30.66,92.81-109.34,91.41-114.4.2-4.54-49.04-28.14-70.57-44.12-73.81-74.68,108.48-23.88,117.17-35.59Z'/%3e%3cpath%20d='M1385.74,1154.44c18.87,22.02,62.67,30.92,92.46,46.68,10.16,5.37,15.26,17.4,11.11,28.12-15.63,40.36-127.28-8.73-157.91-19.11-87.98-40.63,118.05-355.22,157.71-287.19,5.35,9.17,4.76,20.64-.96,29.58-23.4,36.55-94.87,140.2-110.81,159.94,3.62,4.07,85.35-46.2,129.54-71.69,10.67-6.15,23.7-7.14,34.94-2.11,56.73,25.42-126.75,109.25-156.08,115.78Z'/%3e%3cpath%20d='M943.07,724.61c18.43-5.97,37.04,8.19,36.34,27.55-1.03,28.18-9,50.8-39.99,61.74-7.81,2.76-33.62-17.78-35.04-29.51-4.17-34.44,11.81-51.07,38.7-59.78Z'/%3e%3cpath%20d='M549.64,720.19c-12.38,10.33-25.4,5.7-40.04-1.05-5.54-2.55-16.34-12.15-13.94-24.15,5.21-26.07,33.27-44.72,45.58-41.98,10.8,2.4,24.69,19.59,25.19,23.99,1.75,15.24-3.34,31.96-16.79,43.18Z'/%3e%3c/svg%3e";

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navbar"> <a href="/"><img${addAttribute(logoWhiteUrl, "src")} alt="Logo" width="40" height="40"></a> <div class="navbar__links"> <a href="/#works" class="navbar__links-item">Works</a> <a href="/about-me" class="navbar__links-item">About me</a> </div> </div>`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/components/NavBar.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/layouts/Layout.astro", void 0);

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
