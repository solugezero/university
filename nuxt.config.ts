export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss", "primevue/resources/themes/saga-blue/theme.css", "primevue/resources/primevue.css", "primeicons/primeicons.css"],
  components: {
    global: true,
    dirs: ["@/ui-components", "@/components"],
  },
  build: {
    transpile: ["primevue"],
  },
});
