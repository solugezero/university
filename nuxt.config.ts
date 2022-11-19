export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss", "primevue/resources/themes/saga-blue/theme.css", "vuetify/lib/styles/main.sass", "@/assets/scss/app.scss"],
  components: {
    global: true,
    dirs: ["@/ui-components", "@/components"],
  },
  build: {
    transpile: ["primevue", "vuetify"],
  },
});
