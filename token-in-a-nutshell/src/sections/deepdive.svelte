<script>
	import { Code, Notes, Slide, Step } from "@components"

</script>
<section>
	<Slide animate>
		<h1 data-id="dasdjasdf" class="font-mono text-4xl">deepdive. stateless token.</h1>
	</Slide>
	<Slide>
		<Step order="1"><code>JWT</code></Step>
		<Step order="2" fadeInOut><code>PASETO</code></Step>
	</Slide>
	<Slide animate>
		<h1 data-id="as;kjdfad" class="font-mono text-4xl">JWT 101 - anatomy</h1>
		<code class="text-center text-2xl mt-5">
			{'<header>.<body>.<signature>'}
		</code>
		<Step>
			<p class="font-mono text-lg mt-3">JWT carries information (state) hence server can be "stateless"</p>
		</Step>
	</Slide>
	<Slide animate>
		<h1 class="font-mono">Header</h1>
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
		<h1 class="font-mono">Header</h1>
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
		<h1 class="font-mono">Header</h1>
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
	<Slide>
		<h1 class="font-mono">Payload</h1>
		<Code lang="json" lines="|3,4,5,6">
			{`
			{
				"sub": "subject", // unique principal of this token
				"iss": "https://securetoken.google.com/<firebase-prj-key>",
				"aud": "<firebae-prj-key>" // expected consumer of this token
				"iat": "<issued_at>",
				"exp": "<expired_at>"
			}
			`}
		</Code>
		<Notes>
			along with supported algorithm should be added; it is important to validate

			- issuer
			- audience
			- iat
			- exp
		</Notes>
	</Slide>
	<Slide>
		<h1 class="font-mono">Signature</h1>
		<Code lang="typescript">
			{`
				sign(alg, ascii(base64url(header) + '.' + base64url(payload)))
			`}
		</Code>
	</Slide>
	<Slide animate>
		<span data-id="algo" class="font-mono">algorithm</span>
		<div data-id="algo-panel" class="w-1/2 h-full m-auto my-5">
			<div class="flex flex-row justify-center items-center gap-5">
				<div data-id="pfx" class="font-mono bg-indigo-400 rounded-l-xl p-5">signing</div>
				<div class="font-mono bg-orange-500 rounded-r-xl p-5">hashing</div>
			</div>
		</div>
		<span class="font-mono text-2xl mt-8">&nbsp;</span>
	</Slide>
	<Slide animate>
		<span data-id="algo" class="font-mono">algorithm</span>
		<div data-id="algo-panel" class="w-1/2 h-full m-auto my-5">
			<div class="flex flex-row justify-center items-center gap-5">
				<div data-id="pfx" class="font-mono bg-indigo-400 rounded-l-xl p-5">RS</div>
				<div data-id="hash-std" class="font-mono bg-orange-500 rounded-r-xl p-5">256</div>
			</div>
		</div>
		<span class="font-mono text-2xl mt-8">Scary Version: RSASSA-PKCS-v1_5 Signature with SHA-256</span>
	</Slide>
	<Slide animate>
		<span data-id="algo" class="font-mono">algorithm</span>
		<div data-id="algo-panel" class="w-1/2 h-full m-auto my-5">
			<div class="flex flex-row justify-center items-center gap-5">
				<div data-id="pfx" class="font-mono bg-indigo-400 rounded-l-xl p-5">PS</div>
				<div data-id="hash-std" class="font-mono bg-orange-500 rounded-r-xl p-5">256</div>
			</div>
		</div>
		<span class="font-mono text-2xl mt-8">Scary Version: RSASSA-PSS Signature with SHA-256</span>
	</Slide>
	<Slide animate>
		<span data-id="algo" class="font-mono">algorithm</span>
		<div data-id="algo-panel" class="w-1/2 h-full m-auto my-5">
			<div class="flex flex-row justify-center items-center gap-5">
				<div data-id="pfx" class="font-mono bg-indigo-400 rounded-l-xl p-5">ES</div>
				<div data-id="hash-std" class="font-mono bg-orange-500 rounded-r-xl p-5">256</div>
			</div>
		</div>
		<span class="font-mono text-2xl mt-8">Scary Version: ECDSA Signature with P-256 (prime256v1)</span>
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
</section>
