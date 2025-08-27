// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Sitemap from "file:///home/project/node_modules/vite-plugin-sitemap/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://murivest.co.ke",
      dynamicRoutes: [
        "/about",
        "/properties",
        "/investors",
        "/contact",
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
        "/leadership",
        "/market",
        "/process",
        "/calculator",
        "/contact",
        "/contact",
        "/contact"
      ],
      // Optional extra metadata
      changefreq: "monthly",
      priority: 0.7
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgU2l0ZW1hcCBmcm9tICd2aXRlLXBsdWdpbi1zaXRlbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgU2l0ZW1hcCh7XG4gICAgICBob3N0bmFtZTogJ2h0dHBzOi8vbXVyaXZlc3QuY28ua2UnLFxuICAgICAgZHluYW1pY1JvdXRlczogW1xuICAgICAgICAnL2Fib3V0JyxcbiAgICAgICAgJy9wcm9wZXJ0aWVzJyxcbiAgICAgICAgJy9pbnZlc3RvcnMnLFxuICAgICAgICAnL2NvbnRhY3QnLFxuICAgICAgICBcIi9wcm9wZXJ0eS8xXCIsIFxuICAgICAgICBcIi9wcm9wZXJ0eS8yXCIsXG4gICAgICAgIFwiL3Byb3BlcnR5LzNcIixcbiAgICAgICAgXCIvcHJvcGVydHkvNFwiLFxuICAgICAgICBcIi9wcm9wZXJ0eS81XCIsXG4gICAgICAgIFwiL3Byb3BlcnR5LzZcIixcbiAgICAgICAgXCIvcHJvcGVydHkvN1wiLFxuICAgICAgICBcIi9ibG9nXCIsICAgICAgIFxuICAgICAgICBcIi9ibG9nLzFcIiwgICAgICAgIFxuICAgICAgICBcIi9ibG9nLzJcIixcbiAgICAgICAgXCIvYmxvZy8zXCIsXG4gICAgICAgIFwiL2Jsb2cvNFwiLFxuICAgICAgICBcIi9ibG9nLzVcIixcbiAgICAgICAgXCIvYmxvZy82XCIsXG4gICAgICAgIFwiL2Jsb2cvN1wiLFxuICAgICAgICBcIi9ibG9nLzhcIixcbiAgICAgICAgXCIvYmxvZy85XCIsXG4gICAgICAgIFwiL2Jsb2cvMTBcIixcbiAgICAgICAgXCIvYmxvZy8xMVwiLFxuICAgICAgICBcIi9ibG9nLzEyXCIsXG4gICAgICAgIFwiL2Jsb2cvMTNcIixcbiAgICAgICAgXCIvYmxvZy8xNFwiLFxuICAgICAgICBcIi9ibG9nLzE1XCIsXG4gICAgICAgIFwiL2Jsb2cvMTZcIixcbiAgICAgICAgXCIvYmxvZy8xN1wiLFxuICAgICAgICBcIi9ibG9nLzE4XCIsXG4gICAgICAgIFwiL2Jsb2cvMTlcIixcbiAgICAgICAgXCIvYmxvZy8yMFwiLFxuICAgICAgICBcIi9ibG9nLzIxXCIsXG4gICAgICAgICcvbGVhZGVyc2hpcCcsXG4gICAgICAgICcvbWFya2V0JyxcbiAgICAgICAgJy9wcm9jZXNzJyxcbiAgICAgICAgJy9jYWxjdWxhdG9yJyxcbiAgICAgICAgJy9jb250YWN0JyxcbiAgICAgICAgJy9jb250YWN0JyxcbiAgICAgICAgJy9jb250YWN0JyxcblxuICAgICAgIF0sXG4gICAgICAvLyBPcHRpb25hbCBleHRyYSBtZXRhZGF0YVxuICAgICAgY2hhbmdlZnJlcTogXCJtb250aGx5XCIsXG4gICAgICBwcmlvcml0eTogMC43XG4gICAgfSksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFFRDtBQUFBO0FBQUEsTUFFRCxZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsSUFDWixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
