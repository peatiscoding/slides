<script lang="ts">
	import { Presentation, Slide, Code } from '@components'
	import CoverSlide from './slides/cover.svelte'
	import IntroSection from './sections/intro.svelte'
	import ClassificationByNature from './sections/classification-by-nature.svelte'
	import ClassificationByResponsibility from './sections/classification-by-responsibility.svelte'
</script>

<Presentation>
	<Slide animate>
		<h1 class="font-mono text-5xl">Token in Nutshell</h1>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-4xl">Token in Nutshell</h1>
		<p class="font-mono text-grey mt-3"><small>By Kittiphat S</small></p>
	</Slide>
	<CoverSlide highlights="|3|4|5|6|7" />
	<CoverSlide highlights="3" />
	<Slide animate>
		<h1 class="font-mono text-4xl">so ... what's token?</h1>
	</Slide>
	<!-- Imagine getting into a building -->
	<IntroSection />
	<!-- Let's see its responsibility (id_token, access_token, refresh_token) -->
	<ClassificationByResponsibility />
	<!-- Let's see its nature (opaque token; stateless token) -->
	<ClassificationByNature />
	<Slide animate>
		<h1 class="font-mono text-left p-5">Refs</h1>
		<Code lang="markdown">
			{`
			- https://thenewstack.io/the-different-token-types-and-formats-explained/
			- https://dev.to/techschoolguru/why-paseto-is-better-than-jwt-for-token-based-authentication-1b0c
			- https://auth0.com/blog/id-token-access-token-what-is-the-difference/
			- https://auth0.com/blog/identity-unlocked-explained-episode-1/
			`}
		</Code>
	</Slide>
</Presentation>
