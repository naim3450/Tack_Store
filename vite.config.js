import { build, defineConfig, rollupVersion } from "vite";
import { dirname, resolve } from 'path'
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                product: resolve(__dirname, "Product.html"),
                contact: resolve(__dirname, "contact.html"),
                addToCart: resolve(__dirname, "addToCart.html"),
                singup: resolve(__dirname, "singup.html"),
                login: resolve(__dirname, "login.html"),
            }
        }
    }
})