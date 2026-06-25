import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1. 인증 엔드포인트 (경로 재작성)
      // 프론트 요청: POST /api/users/login
      // 변환 후 전달: POST http://localhost:8080/login
      "/api/users/login": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api/users/login", "/login"),
      },
      "/api/users/join": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api/users/join", "/join"),
      },

      // 2. 일반 API (경로 그대로 전달)
      // 프론트 요청: GET /api/boards
      // 변환 후 전달: GET http://localhost:8080/api/boards
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
