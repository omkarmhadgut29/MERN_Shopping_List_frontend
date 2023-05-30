import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/

export default defineConfig({
    server: {
        proxy: {
            // "/api/items": {
            //     // target: import.meta.env.VITE_BACKEND_SERVER,
            //     target: "https://mernshoppinglist-production.up.railway.app",
            //     changeOrigin: true,
            // },
            "/api/items": "https://mernshoppinglist-production.up.railway.app",
        },
        host: "0.0.0.0",
        port: import.meta.env?.PORT || 5646,
    },
    plugins: [react()],
});

// export default ({ mode }) => {
//     process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

//     return defineConfig({
//         server: {
//             proxy: {
//                 "/api/items": {
//                     target: process.env.VITE_BACKEND_SERVER,
//                     changeOrigin: true,
//                 },
//             },
//         },
//         plugins: [react()],
//     });
// };
