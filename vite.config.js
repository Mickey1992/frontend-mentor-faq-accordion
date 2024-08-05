import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/frontend-mentor-faq-accordion/", // 设置为仓库名
	plugins: [react()],
});
