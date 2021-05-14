export default {
  server: {
    port: 3000,
    host: `0.0.0.0`,
  },
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/tailwindcss",
  ],
  target: "static",
  env: {
    configUrl: process.env.CONFIG_URL || "http://localhost:3000/config.json",
  },
  head: {
    title: "Critical Failure: Fumble Tables",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "FumbleCharts",
        name: "Critical Fail: Fumble Charts",
        content: "A website to troll your PCs and NPCs with critical failures.",
      },
    ],
  },
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        tailwindcss: {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {},
      },
    },
  },
  vuetify: {
    theme: { dark: true },
  },
};
