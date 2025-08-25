import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://murivest.co.ke',
      dynamicRoutes: [
        '/about',
        '/properties',
        '/investors',
        '/contact',
        "/property/1", 
        "/property/2",
        "/property/3",
        "/property/4",
        "/property/5",
        "/property/6",
        "/property/7",
        "/blog",       
        "/blog/1",        
        "/blog/2",
        "/blog/3",
        "/blog/4",
        "/blog/5",
        "/blog/6",
        "/blog/7",
        "/blog/8",
        "/blog/9",
        "/blog/10",
        "/blog/11",
        "/blog/12",
        "/blog/13",
        "/blog/14",
        "/blog/15",
        "/blog/16",
        "/blog/17",
        "/blog/18",
        "/blog/19",
        "/blog/20",
        "/blog/21",
        '/leadership',
        '/market',
        '/process',
        '/calculator',
        '/contact',
        '/contact',
        '/contact',

       ],
      // Optional extra metadata
      changefreq: "monthly",
      priority: 0.7
    }),
  ],
})
