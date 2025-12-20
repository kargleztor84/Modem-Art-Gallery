import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig ({
    server: {
        hmr: {
            overlay: false,
        }
    },

    base: 'https://kargleztor84.github.io/Modem-Art-Gallery/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                location: resolve(__dirname, "location/index.html"),
            },
        },
    },
})