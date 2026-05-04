import { c as createComponent } from './astro-component_DEj9kcyR.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead, o as defineScriptVars, n as renderComponent, h as addAttribute } from './entrypoint_lPZ9y68-.mjs';
import { $ as $$PortableText } from './PortableText_Bn4EX4Hk.mjs';
import { s as sanity, $ as $$Layout } from './Layout_BZ9qXHkk.mjs';
import 'clsx';
/* empty css               */
import { format } from 'date-fns';

function youtubeVideoId(link) {
  try {
    const u = new URL(link.trim());
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id || null;
    }
    if (u.hostname.endsWith("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) {
        const id = u.pathname.replace(/^\/embed\//, "").split("/")[0];
        return id || null;
      }
      return u.searchParams.get("v");
    }
  } catch {
  }
  return null;
}
function youtubeThumbnailUrl(link) {
  const id = youtubeVideoId(link);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}
function youtubeEmbedUrl(link) {
  try {
    const u = new URL(link.trim());
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : link;
    }
    if (u.hostname.endsWith("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return link.trim();
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
  } catch {
  }
  return link.trim();
}
createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/utils/index.astro", void 0);

const $$CategoryList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CategoryList;
  const { names } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="category-list"> ${names.map((name) => renderTemplate`<div class="category-list__item"> <p>${name}</p> </div>`)} </div>`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/components/CategoryList.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
async function getStaticPaths() {
  const works = await sanity.fetch(`*[_type == "project"]{
    slug{
      current
    },
    title,
    body,
    publishedAt,
    coverImage{
      "url": asset->url,
      alt
    },
    categories[]->{
      title
    },
    gallery[]{ _key, _type, alt, "assetUrl": asset->url, url }
  }`);
  const paths = works.map((work) => ({
    params: { workSlug: work.slug.current },
    props: { work }
  }));
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { work } = Astro2.props;
  if (!work) {
    return new Response(null, { status: 404 });
  }
  const galleryMedia = [];
  const galleryLightbox = [];
  for (const g of work.gallery ?? []) {
    if (g._type === "image" && g.assetUrl) {
      const imageItem = { kind: "image", src: g.assetUrl, alt: g.alt || "" };
      galleryLightbox.push(imageItem);
      galleryMedia.push({
        kind: "image",
        src: imageItem.src,
        alt: imageItem.alt,
        lightboxIndex: galleryLightbox.length - 1
      });
      continue;
    }
    if (g._type === "youtubeVideo" && g.url) {
      const thumbUrl = youtubeThumbnailUrl(g.url);
      if (!thumbUrl) continue;
      galleryMedia.push({
        kind: "youtube",
        videoUrl: youtubeEmbedUrl(g.url),
        alt: g.alt || "Vidéo YouTube"
      });
    }
  }
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n  const root = document.getElementById("work-lightbox");\n  const stage = root?.querySelector(".work-lightbox__stage");\n  const btnClose = root?.querySelector(".work-lightbox__close");\n  const backdrop = root?.querySelector(".work-lightbox__backdrop");\n\n  if (!root || !stage || !btnClose || !backdrop) {\n    /* rien */\n  } else {\n    let index = 0;\n    let stageZone = "";\n\n    function isPhoneViewport() {\n      return window.matchMedia("(max-width: 768px)").matches;\n    }\n\n    function canGoPrev() {\n      return index > 0;\n    }\n\n    function canGoNext() {\n      return index < galleryLightbox.length - 1;\n    }\n\n    function applyStageCursor() {\n      stage.classList.remove("work-lightbox__stage--left", "work-lightbox__stage--right", "work-lightbox__stage--idle");\n      if (stageZone === "left" && canGoPrev()) {\n        stage.classList.add("work-lightbox__stage--left");\n        return;\n      }\n      if (stageZone === "right" && canGoNext()) {\n        stage.classList.add("work-lightbox__stage--right");\n        return;\n      }\n      stage.classList.add("work-lightbox__stage--idle");\n    }\n\n    function clearStage() {\n      stage.innerHTML = "";\n      stageZone = "";\n      applyStageCursor();\n    }\n\n    function renderAt(i) {\n      index = i;\n      clearStage();\n      const item = galleryLightbox[i];\n      if (!item) return;\n\n      const shell = document.createElement("div");\n      shell.className = "work-lightbox__img-shell";\n      const img = document.createElement("img");\n      img.src = item.src;\n      img.alt = item.alt;\n      img.className = "work-lightbox__img";\n      shell.appendChild(img);\n      stage.appendChild(shell);\n      applyStageCursor();\n    }\n\n    function openAt(i) {\n      if (isPhoneViewport()) return;\n      if (!galleryLightbox.length) return;\n      index = Math.max(0, Math.min(i, galleryLightbox.length - 1));\n      root.hidden = false;\n      document.body.style.overflow = "hidden";\n      renderAt(index);\n    }\n\n    function closeLb() {\n      clearStage();\n      root.hidden = true;\n      document.body.style.overflow = "";\n    }\n\n    document.querySelectorAll("[data-lightbox-open]").forEach((btn) => {\n      btn.addEventListener("click", () => {\n        if (isPhoneViewport()) return;\n        const raw = btn.getAttribute("data-lightbox-open");\n        const i = raw == null ? 0 : parseInt(raw, 10);\n        openAt(Number.isNaN(i) ? 0 : i);\n      });\n    });\n\n    stage.addEventListener("mousemove", (e) => {\n      if (root.hidden) return;\n      const rect = stage.getBoundingClientRect();\n      const center = rect.left + rect.width / 2;\n      stageZone = e.clientX < center ? "left" : "right";\n      applyStageCursor();\n    });\n\n    stage.addEventListener("mouseleave", () => {\n      if (root.hidden) return;\n      stageZone = "";\n      applyStageCursor();\n    });\n\n    stage.addEventListener("click", (e) => {\n      if (root.hidden || isPhoneViewport()) return;\n      const rect = stage.getBoundingClientRect();\n      const center = rect.left + rect.width / 2;\n      if (e.clientX < center) {\n        if (canGoPrev()) renderAt(index - 1);\n      } else if (canGoNext()) {\n        renderAt(index + 1);\n      }\n    });\n\n    btnClose.addEventListener("click", closeLb);\n    backdrop.addEventListener("click", closeLb);\n\n    document.addEventListener("keydown", (e) => {\n      if (root.hidden) return;\n      if (e.key === "Escape") closeLb();\n      if (e.key === "ArrowLeft" && index > 0) renderAt(index - 1);\n      if (e.key === "ArrowRight" && index < galleryLightbox.length - 1) renderAt(index + 1);\n    });\n\n    window.addEventListener("resize", () => {\n      if (!root.hidden && isPhoneViewport()) {\n        closeLb();\n      }\n    });\n  }\n})();<\/script>'])), renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="work-details"> <img${addAttribute(work.coverImage.url, "src")}${addAttribute(work.coverImage.alt, "alt")} width="100%" height="100%" style="object-fit: cover; "> <h1 style="font-family: 'Forma DJR Text Bold';">${work.title}</h1> ${renderComponent($$result2, "CategoryList", $$CategoryList, { "names": work.categories.map((category) => category.title) })} <p class="work-details-date"> ${format(new Date(work.publishedAt), "dd/MM/yyyy")} </p> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": work.body })} <div class="work-gallery"> ${galleryMedia.map(
    (item, index) => item.kind === "image" ? renderTemplate`<button type="button" class="work-gallery__thumb"${addAttribute(item.lightboxIndex, "data-lightbox-open")}${addAttribute(`Agrandir l’image ${item.lightboxIndex + 1}`, "aria-label")}> <img${addAttribute(item.src, "src")}${addAttribute(item.alt, "alt")} width="33%" height="300" loading="lazy"> </button>` : renderTemplate`<div class="work-gallery__thumb"> <iframe${addAttribute(item.videoUrl, "src")}${addAttribute(item.alt, "title")}></iframe> </div>`
  )} </div> </div> <div id="work-lightbox" class="work-lightbox" hidden> <button type="button" class="work-lightbox__backdrop" aria-label="Fermer la fenêtre"></button> <div class="work-lightbox__panel" role="dialog" aria-modal="true" aria-label="Média en grand"> <button type="button" class="work-lightbox__close" aria-label="Fermer">&times;</button> <div class="work-lightbox__stage"></div> </div> </div> ` }), defineScriptVars({ galleryLightbox }));
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/pages/works/[workSlug]/index.astro", void 0);

const $$file = "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/pages/works/[workSlug]/index.astro";
const $$url = "/works/[workSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
