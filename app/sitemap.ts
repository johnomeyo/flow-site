// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flowfundsapp.co.ke';
  const currentDate = new Date('2025-06-11').toISOString().split('T')[0]; // Set to June 11, 2025

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily', // Landing page, might have frequent updates (e.g., hero content)
      priority: 1.0,           // Highest priority
    },
    {
      url: `${baseUrl}/entrepreneurs`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Core offering page, potentially updated more often than static content
      priority: 0.9,
    },
    {
      url: `${baseUrl}/investors`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // Core offering page
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly', // Informational page, less frequent updates
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly', // Informational page
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily', // Assuming you'll add new blog posts frequently
      priority: 0.8,
      // If you have dynamic blog posts, you would add them individually here:
      // You would fetch your actual blog posts data and map over them, e.g.:
      // ...allBlogPosts.map((post) => ({
      //   url: `${baseUrl}/blog/${post.slug}`,
      //   lastModified: post.updatedAt || post.publishedAt, // Use actual post update date
      //   changeFrequency: 'weekly',
      //   priority: 0.6,
      // })),
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly', // Updates when new job openings are available
      priority: 0.6,
    },
    {
      url: `${baseUrl}/premium`,
      lastModified: currentDate,
      changeFrequency: 'monthly', // Feature/pricing page, moderate updates
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly', // Legal pages typically don't change often
      priority: 0.5,             // Lower priority
    },
  ];
}