import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const parts = process.env.GITHUB_REPOSITORY.split("/");
  const repoName = parts[1] || "";
  if (!repoName.endsWith(".github.io")) {
    repo = repoName;
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: repo ? `/${repo}` : undefined,
  assetPrefix: repo ? `/${repo}` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
