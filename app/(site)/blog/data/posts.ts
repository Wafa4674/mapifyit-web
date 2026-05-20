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
  },
  {
    slug: "global-routing-benchmark-mapifyit-vs-google-maps-2026",
    title: "Mapifyit Routing Performance Benchmark Against Google Maps",
    excerpt: "Mapifyit car routing delivers premium-grade accuracy across all five tested regions, with 17 of 19 routes within ±10% of Google Maps on distance.",
    category: "Performance Benchmark",
    date: "May 20, 2026",
    readTime: "8 min read",
    featured: false,
    tags: ["Routing", "Benchmark", "Performance", "Google Maps Alternative", "MapifyIt"],
    metaDescription: "Mapifyit vs Google Maps multi-region performance analysis for car routing. See how Mapifyit provides premium-grade accuracy and speed.",
    ogTitle: "Mapifyit Routing Performance Benchmark Against Google Maps",
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
