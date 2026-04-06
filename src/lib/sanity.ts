import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "fhumllcy",
  dataset: "production",
  apiVersion: "2026-03-29",
  useCdn: true,
});
