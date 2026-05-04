import { c as createComponent } from './astro-component_DEj9kcyR.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_lPZ9y68-.mjs';
import { $ as $$PortableText } from './PortableText_Bn4EX4Hk.mjs';
import { s as sanity, $ as $$Layout } from './Layout_BZ9qXHkk.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const aboutMeInfos = await sanity.fetch(`
*[_type == "aboutMeInfos" && _id == "aboutMeInfos"][0]{
  title,
  body,
  "image": image{
    "url": asset->url,
    alt
  }
}
`);
  const {
    title,
    body,
    image: { url, alt }
  } = aboutMeInfos;
  if (!aboutMeInfos) {
    return new Response(null, { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="about-me"> <div class="about-me__content"> <h1>${title || ""}</h1> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": body || [] })} </div> <img class="about-me__image"${addAttribute(url || "", "src")}${addAttribute(alt || "", "alt")} loading="lazy"> </div> ` })}`;
}, "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/pages/about-me/index.astro", void 0);

const $$file = "/Users/guillaumedegan/Documents/PersonalProjects/astro-cantin-portfolio/src/pages/about-me/index.astro";
const $$url = "/about-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
