import { defineConfig } from "vite";

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
                main: "index.html",
                location: "location.html",
            },
        },
    }
})