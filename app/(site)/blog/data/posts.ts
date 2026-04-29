export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  metaDescription: string;
  ogTitle?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-mapify-is-the-best-maps-alternative-to-google-maps-and-mapbox",
    title: "MapifyIt Maps & GIS: The Complete Enterprise Alternative to Google Maps, Mapbox, and Traditional GIS Platforms",
    excerpt: "Location is no longer just a feature—it’s infrastructure. From logistics and ride-hailing to delivery, fintech, and smart cities, modern applications depend heavily on mapping APIs.",
    category: "Industry Insights",
    date: "April 28, 2026",
    readTime: "15 min read",
    featured: true,
    tags: ["GIS", "Mapping", "Enterprise", "Google Maps Alternative", "Mapbox Alternative"],
    metaDescription: "MapifyIt is a full-stack mapping and GIS platform — the complete enterprise alternative to Google Maps, Mapbox, and Esri.",
    ogTitle: "MapifyIt Maps & GIS: The Complete Enterprise Alternative to Google Maps & Mapbox",
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
