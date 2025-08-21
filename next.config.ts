// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// If you will deploy to a GitHub repo named REPO_NAME, set it here:
const repoName = "REPO_NAME"; // <-- change to your repo name or leave empty

const nextConfig: NextConfig = {
  output: "export", // enables `next export`
  assetPrefix: isProd && repoName ? `/${repoName}/` : undefined,
  basePath: isProd && repoName ? `/${repoName}` : undefined,
};

export default nextConfig;
