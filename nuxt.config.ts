// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Trello',
            titleTemplate: '%s • Personal clone app',
            charset: 'utf-8',
            viewport: 'width=devide-width, initial-scale=1',
            meta: [
                { hid: "description", name: "description", content: "" },
            ]
        }
    },

    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
})
