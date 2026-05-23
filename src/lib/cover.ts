import { youtubeEmbedUrl, youtubeThumbnailUrl } from "../utils/index.astro";

export type CoverRaw = {
  _type: string;
  alt?: string;
  url?: string;
  assetUrl?: string;
};

export type CoverDisplay =
  | { kind: "image"; src: string; alt: string }
  | { kind: "youtube"; embedUrl: string; thumbUrl: string; alt: string };

export const coverItemGroq = `"coverItem": coalesce(
  cover[0]{ _type, alt, url, "assetUrl": asset->url },
  select(defined(coverImage) => {"_type": "image", "assetUrl": coverImage.asset->url, "alt": coverImage.alt})
)`;

export function resolveCover(cover: CoverRaw | null | undefined): CoverDisplay | null {
  if (!cover) return null;

  if (cover._type === "image" && cover.assetUrl) {
    return { kind: "image", src: cover.assetUrl, alt: cover.alt ?? "" };
  }

  if (cover._type === "youtubeVideo" && cover.url) {
    const thumbUrl = youtubeThumbnailUrl(cover.url);
    if (!thumbUrl) return null;
    return {
      kind: "youtube",
      embedUrl: youtubeEmbedUrl(cover.url),
      thumbUrl,
      alt: cover.alt ?? "Vidéo YouTube",
    };
  }

  return null;
}
