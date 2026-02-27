export default defineConfig({
    site: 'https://alejandrapereaf.github.io',
    base: '/alejandraperaf.github.io',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});