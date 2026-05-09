import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "fhumllcy",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
