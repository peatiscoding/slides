<script lang="ts">
	import { Presentation, Slide, Notes } from '@components'
	import IntroSection from './sections/intro.svelte'
	import Classification from './sections/classification.svelte'
	import Usage from './sections/usage.svelte'
	import DeepDive from './sections/deepdive.svelte'
	import Outro from './sections/outro.svelte'
</script>

<Presentation>
	<Slide animate>
		<h1 class="font-mono text-5xl">Token in a Nutshell</h1>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-4xl mb-[50px]">Token in a Nutshell</h1>
		<iconify-icon icon="line-md:github-loop" />
		<br/>
		<a class="underline underline-offset-7 font-mono text-xl" href="https://peatiscoding.github.io/" target="_blank">@peatiscoding</a>
		<p class="font-mono text-sm mt-2">CTO <a class="underline" href="https://muze.co.th" target="_blank">@Muze Innovation</a></p>
		<Notes>
			- not a cryptographer
			- not a security expert
			- just a regular programmer that happens to work on these type of projects for quite sometime
			- sharing what i know
		</Notes>
	</Slide>
	<!-- Imagine getting into a building -->
	<IntroSection />
	<!-- Let's see its responsibility (id_token, access_token, refresh_token) -->
	<!-- Let's see its nature (opaque token; stateless token) -->
	<Classification />
	<!-- Let's combine these 2 knowledge and see how they really been used? -->
	<Usage />
	<DeepDive />
	<Outro />
</Presentation>
