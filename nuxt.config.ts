export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss", "vuetify/lib/styles/main.sass"],
  components: {
    global: true,
    dirs: ["@/ui-components", "@/components"],
  },
  build: {
    transpile: ["vuetify"],
  },
});
