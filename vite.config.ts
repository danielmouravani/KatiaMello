import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function inlineCss(): Plugin {
  return {
    name: 'inline-css-plugin',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html, ctx) {
      if (!ctx || !ctx.bundle) return html;
      let result = html;
      for (const [fileName, asset] of Object.entries(ctx.bundle)) {
        if (fileName.endsWith('.css') && (asset as any).source) {
          const cssContent = (asset as any).source.toString();
          // Match link tag for this CSS file (both href before rel and rel before href)
          const pattern1 = new RegExp(`<link[^>]*rel=["']stylesheet["'][^>]*href=["'][^"']*${fileName}["'][^>]*>`, 'gi');
          const pattern2 = new RegExp(`<link[^>]*href=["'][^"']*${fileName}["'][^>]*rel=["']stylesheet["'][^>]*>`, 'gi');
          if (pattern1.test(result)) {
            result = result.replace(pattern1, `<style>${cssContent}</style>`);
          } else if (pattern2.test(result)) {
            result = result.replace(pattern2, `<style>${cssContent}</style>`);
          }
        }
      }
      return result;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
  },
});
