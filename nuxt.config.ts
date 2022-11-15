// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/scss/main.scss"],
    components: {
        global: true,
        dirs: ['@/ui-components', '@/components']
    },
})
