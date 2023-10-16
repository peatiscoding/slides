<script>
	import { Code, Notes, Slide, Step } from "@components"

</script>
<section>
	<Slide animate>
		<h1 class="font-mono text-4xl">deepdive - stateless token</h1>
	</Slide>
	<Slide animate>
		JWT 101 - anatomy
		<Step>
			<code class="text-center text-2xl mt-5">
				{'<header>.<body>.<signature>'}
			</code>
		</Step>
		<Step>
			<p class="font-mono text-lg mt-3">JWT carries information (state) hence server can be "stateless"</p>
		</Step>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-2xl">Header</h1>
		<Code lang="json">
			{`
			{
				"alg": "HS256", // simple
				"typ": "JWT"
			}
			`}
		</Code>
		<Notes>
			Most of the time when we use custom library to validate the token we always
			focused on signature blindly. Not to realized the tiny details that matters.
		</Notes>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-2xl">Header</h1>
		<Code lang="json">
			{`
			{
				"alg": "RS256", // using async algorithms (public-private key pairs)
				"kid": "f2e82732b971a135cf1416e8b46dae04d80894e7", // idp supports multiple keys
				"typ": "JWT"
			}
			`}
		</Code>
		<Notes>
			Example: "alg"; JWT was desgined so that it can handle dynamic of signing classes
			hence "alg" also supports "none" value. This is completely valid JWT class and
			it will went through if your code doesn't validate the supported algorithms.
		</Notes>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-2xl">Header</h1>
		<Code lang="json" lines="2">
			{`
			{
				"alg": "none", // Pitfall #1
				"typ": "JWT"
			}
			`}
		</Code>
		<Notes>
			"alg" also supports "none" value. This is completely valid JWT class and
			it will went through if your code doesn't validate the supported algorithms.
		</Notes>
	</Slide>
	<Slide animate>
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
	<Slide>
		<code>
			<Step>JWT</Step>
			<Step fadeIn>/ PASETO</Step>
		</code>
	</Slide>
</section>
