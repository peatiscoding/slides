import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteSVG from 'vite-plugin-svelte-svg'
import { VitePluginRadar } from 'vite-plugin-radar'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		svelteSVG({
			svgoConfig: {}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true, // Set false to accept '.svg' without the '?component'
		}),
		VitePluginRadar({
			gtm: {
				id: 'G-5NKJEEWQZ5',
			},
		})
	],
	resolve: {
		alias: {
			'@config': path.resolve(__dirname, './src/config.ts'),
			'@components': path.resolve(__dirname, './src/lib/components/index.ts'),
			'@languages': path.resolve(__dirname, './src/lib/languages/index.ts'),
			'@lib': path.resolve(__dirname, './src/lib'),
			'@stores': path.resolve(__dirname, './src/lib/stores'),
			'@styles': path.resolve(__dirname, './src/lib/styles'),
		},
	},
})
