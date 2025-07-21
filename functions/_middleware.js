// Cloudflare Pages Middleware
// This file signals that this is a static site, not a Worker

export default function middleware() {
  // For static sites, we don't need middleware processing
  // This file exists to override any Worker configurations
  return new Response(null, { status: 200 });
}