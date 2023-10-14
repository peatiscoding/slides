<script>
// @ts-nocheck
	import { Code, Notes, Slide } from "@components"
	import Pitfall_1_1 from '../../assets/pitfall-1-1.svg?c'
	import Pitfall_1_2 from '../../assets/pitfall-1-2.svg?c'
</script>
<section>
	<Slide animate>
		<h1 class="font-mono text-4xl">so ... in combined perspective</h1>
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #1</h1>
		<p class="font-mono mt-5 text-2xl">
			using <span class="underline">idp's access_token</span> in place of <span class="underline">app's access_token</span>.
		</p>
		<Notes>
			Imagine we create an application. And we would like to fast track our login process using IdP such as Firebase Login/Azure/Auth0 etc.
		</Notes>
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #1</h1>
		<p class="font-mono mt-5 text-2xl">
			some may endup have the system setup like so.
		</p>
			<Pitfall_1_1/>
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #1</h1>
		<p class="font-mono mt-5 text-2xl">
			here is how it is inteded to be used.
		</p>
			<Pitfall_1_2 />
	</Slide>
	<Slide>
		<h1 data-id="pitfall-2" class="font-mono">common pitfall #2</h1>
		<p class="font-mono mt-5 text-2xl">
			decode idp's access_token for cliams.
		</p>
		<Notes>
			Normally this wouldn't poses any problem if the access token is issued by yourself. However by contract Access Token was not meant to be decoded by client; For example, in Azure Access Token differs from each tenant's application mode and each flow it used for issuing. Hence decoding access token is not really a good idea.
		</Notes>
	</Slide>
	<Slide>
		<h1 data-id="pitfall-2" class="font-mono">better practice</h1>
		<p class="font-mono mt-5 text-2xl">
			decode idp's access_token for cliams.
		</p>
	</Slide>
	<Slide>
		<h1 class="font-mono">Why is this important?</h1>
		<Code lang="markdown" class="mt-5" lines="">
			{`
		- secure. using token correctly will promote security. 
		- understanding. "Access" vs "Identity".
		- "sender constraints"
			`}
		</Code>
	</Slide>
</section>
