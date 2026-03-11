import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "three-stdlib"],
          "react-three": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          gsap: ["gsap", "gsap-trial", "@gsap/react"],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "three",
      "three-stdlib",
      "@react-three/fiber",
      "@react-three/drei",
      "gsap",
    ],
  },
});
