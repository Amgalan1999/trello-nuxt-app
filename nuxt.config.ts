// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Trello',
            titleTemplate: '%s • Personal clone app',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { hid: "description", name: "description", content: "" },
            ],
            script: [
                { src: "https://unpkg.com/phosphor-icons" },
            ]
        }
    },

    css: [
        '@/assets/styles/main.css'
    ],

    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/styles/tailwind.css',
        configPath: '~/tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },

    runtimeConfig: {
        DATABASE_URL: process.env.DATABASE_URL
    },

    nitro: {
        plugins: ["~/server/db/index.ts"]
    },
})
