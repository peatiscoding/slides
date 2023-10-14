<script>
	import { Code, Slide, Step } from "@components"

</script>
<section>
	<Slide animate>
		<h1 class="font-mono text-4xl">deepdive - stateless token</h1>
		<div class="h-[24px]"></div>
		<code>
			<Step fadeIn>JWT</Step>
			<Step fadeIn>/ PASETO</Step>
		</code>
		<Code lang="markdown" class="mt-5" lines="">
			{`
			# Goals

			- jose - JSON Object Signing and Encryption

			- security pitfall of JWT
				- siging with asym and sym keys
				- claims
				- validate JWT properly, issuer and audience
				- kid
				- JKS
			- _sender constraints_ the emerging standards.
				- MTLS
				- DPoP
			- PASETO!
			`}
		</Code>
	</Slide>
</section>
