<script>
// @ts-nocheck
	import { Notes, Slide } from "@components"
	import Pitfall_2_1 from '../../assets/pitfall-2-1.svg?c'
	import Pitfall_2_3 from '../../assets/pitfall-2-3.svg?c'
	import Pitfall_2_4 from '../../assets/pitfall-2-4.svg?c'
</script>
<section>
	<Slide animate>
		<h1 class="font-mono text-4xl">so ... in combined perspective</h1>
	</Slide>
	<Slide>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #1</h1>
		<p class="font-mono mt-5 text-2xl">
			decode IdP's access_token for claims.
		</p>
		<Notes>
			<p>Even though it access token is a JWT doesn't mean all IdP will use them as such</p>
			Normally this wouldn't poses any problem if the access token is issued by yourself. However by contract Access Token was not meant to be decoded by client; For example, in Azure Access Token differs from each tenant's application mode and each flow it used for issuing. Hence decoding access token is not really a good idea.
		</Notes>
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #2</h1>
		<p class="font-mono mt-5 text-2xl">
			using <span class="underline">IdP's access_token</span> in place of <span class="underline">app's access_token</span>.
		</p>
		<Notes>
			Imagine we create an application. And we would like to fast track our login process using IdP such as Firebase Login/Azure/Auth0 etc.
		</Notes>
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #2</h1>
		<p class="font-mono mt-5 text-2xl">
			some may end up having the system setup like so.
		</p>
			<Pitfall_2_1/>
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #2</h1>
		<p class="font-mono mt-5 text-2xl">
			here is how it should be used.
		</p>
			<Pitfall_2_3 />
	</Slide>
	<Slide animate>
		<h1 data-id="pitfall-1" class="font-mono">common pitfall #2</h1>
		<p class="font-mono mt-5 text-2xl">
			or even better..
		</p>
			<Pitfall_2_4 />
	</Slide>
</section>
