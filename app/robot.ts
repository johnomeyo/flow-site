// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',    
        allow: '/',       
      },
    ],
    sitemap: 'https://flowfundsapp.co.ke/sitemap.xml', 
    host: 'https://flowfundsapp.co.ke',                 
  };
}