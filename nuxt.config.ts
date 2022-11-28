export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss", "vuetify/lib/styles/main.sass"],
  components: {
    global: true,
    dirs: ["@/ui-components", "@/components"],
  },
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      title: "РЭУ Moodle",
      link: [{ rel: "icon", type: "image/x-icon", href: "./assets/imgs/favicon.png" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: process.env.npm_package_description || "" },
      ],
    },
  },
});
