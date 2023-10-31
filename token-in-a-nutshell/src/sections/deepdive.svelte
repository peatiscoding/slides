<script lang="ts">
	import 'iconify-icon'
	import { Code, FitText, Notes, Slide, Step } from "@components"
	import Communication from '../components/communication.svelte'
	import DPoP from '../../assets/dpop-1.svg?c'

	type CommuStep = { dir: '<' | '>' | '.>' | '<.' | '<.>' | '><', title: string, subtitle: string } 

	const tlsSteps: CommuStep[] = [
		{
			dir: '>', title: 'Client Hello', subtitle: 'TLS version + details',
		},
		{
			dir: '<', title: 'Server Hello', subtitle: 'Supported TLS version + details',
		},
		{
			dir: '<', title: 'Server Certificate', subtitle: '',
		},
		{
			dir: '<.', title: 'Verify Certificate', subtitle: 'against CA',
		},
		{
			dir: '>', title: 'Client sends', subtitle: 'pre-master secret',
		},
		{
			dir: '<.>', title: 'Both', subtitle: 'compute the secrets',
		},
		{
			dir: '><', title: 'Success', subtitle: 'communication is now encrypyted',
		},
	]

	const mtlsSteps: CommuStep[] = [
		{
			dir: '>', title: 'Client Hello', subtitle: 'TLS version + details',
		},
		{
			dir: '<', title: 'Server Hello', subtitle: 'Supported TLS version + details',
		},
		{
			dir: '<', title: 'Server Certificate', subtitle: '',
		},
		{
			dir: '<.', title: 'Verify Certificate', subtitle: 'against CA',
		},
		{
			dir: '<', title: 'Request client certificate', subtitle: '',
		},
		{
			dir: '>', title: 'Client sends certificate', subtitle: '',
		},
		{
			dir: '.>', title: 'Verify Certificate', subtitle: 'against CA',
		},
		{
			dir: '>', title: 'Client sends key info', subtitle: 'pre-master secret',
		},
		{
			dir: '<.>', title: 'Both', subtitle: 'compute the secrets',
		},
		{
			dir: '><', title: 'Success', subtitle: 'communication is now encrypyted',
		},
	]
</script>
<section>
	<Slide animate>
		<h1 data-id="dasdjasdf" class="font-mono text-4xl">deep dive. stateless token.</h1>
	</Slide>
	<Slide>
		<Step order="1"><code>JWT</code></Step>
		<Step order="2" fadeInOut><code>PASETO</code></Step>
		<Notes>
			<p>currently there are more than just JWT such as PASETO. But nothing is as well known as JWT.</p>
			<p>And that's the reason why we must really know our JWT really well.</p>
		</Notes>
	</Slide>
	<Slide animate>
		<h1 data-id="as;kjdfad" class="font-mono text-4xl">JWT 101 - JOSE family</h1>
		<div class="grid grid-flow-row-dense grid-cols-6 mt-[50px]">
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-orange-400 m-3 p-4 col-span-6">JavaScript Object Signing and Encryption</Step>
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-red-500 m-3 p-4">JWT</Step>
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-green-500 m-3 p-4">JWE</Step>
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-teal-500 m-3 p-4">JWS</Step>
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-blue-500 m-3 p-4">JWK</Step>
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-indigo-500 m-3 p-4">JWA</Step>
			<Step fadeDown class="font-mono text-3xl rounded-xl bg-amber-500 m-3 p-4">JWM</Step>
			<Step fadeDown class="font-mono text-2xl rounded-xl bg-red-300 m-3 p-4">RFC 7519</Step>
			<Step fadeDown class="font-mono text-2xl rounded-xl bg-green-300 m-3 p-4">RFC 7516</Step>
			<Step fadeDown class="font-mono text-2xl rounded-xl bg-teal-300 m-3 p-4">RFC 7515</Step>
			<Step fadeDown class="font-mono text-2xl rounded-xl bg-blue-300 m-3 p-4">RFC 7517</Step>
			<Step fadeDown class="font-mono text-2xl rounded-xl bg-indigo-300 m-3 p-4">RFC 7518</Step>
			<Step fadeDown class="font-mono text-2xl rounded-xl bg-amber-300 m-3 p-4">RFC 8259</Step>
		</div>
		<Notes>
			<p>
				JOSE (JavaScript Object Signing and Encryption) is a framework for securely transmitting information between parties. It contains several standards that cover various use cases:</p>
			<ol>
			<li>JWT (JSON Web Token) - An open standard that defines a compact way to securely transmit information as a JSON object. Useful for authorization and information exchange.</li>
			<li>JWS (JSON Web Signature) - Provides integrity for JWTs by allowing the payload to be digitally signed.</li>
			<li>JWE (JSON Web Encryption) - Provides confidentiality for JWTs by allowing the payload to be encrypted.</li>
			<li>JWK (JSON Web Key) - Represents cryptographic keys in a JSON structure. Used for storing and transferring keys.</li>
			<li>JWA (JSON Web Algorithms) - Lists cryptographic algorithms used by JWT, JWS and JWE.</li>
			<li>JWM (JSON Web Message) - A compact format to securely transfer messages between parties.</li>
			<li>JWD (JSON Web Decryption) - The inverse of JWE, describes how to decrypt a JWE-formatted message.</li>
			<li>JWS Unencoded Payload Option - An extension to transmit unencoded payloads in JWS.</li>
			</ol>
		</Notes>
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
				<div data-id="pfx" class="font-mono bg-indigo-400 rounded-l-xl p-5">HS</div>
				<div data-id="hash-std" class="font-mono bg-orange-500 rounded-r-xl p-5">256</div>
			</div>
		</div>
		<span class="font-mono text-2xl mt-8">Scary Version: HMAC Signature with SHA-256</span>
		<Notes>
			the symmetric version of encryption meaning the issuer and the validator need to have the same secret
			doing so means it will need extra care of how to keep the secret in sync. or even how to distribute the secret to another system.

			Consider using other solution beside JWT..
		</Notes>
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
		<Notes>
			<p>A better version of RSA one. because it has the probability randomization in it!</p>
		</Notes>
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
		<Notes>
			<p>A version that make uses of the new Eliciptic Curve which is being used to sign to Crypto Token.</p>
			<p>However this one give a performance bump on signing not validating</p>
			<p>One obvious benefit is that it is really short. And should be safer after Quantum world</p>
		</Notes>
	</Slide>
	<Slide animate>
		<h1 data-id="pasteo" class="font-mono text-4xl">PASETO</h1>
		<p class="font-mono text-2xl mt-3">Platform Agnostic SEcure TOken</p>
		<Step fadeDown class="font-mono text-xl mt-3">but why?</Step>
		<Notes>
			<p>According to multiple cryptographers and security experts JWT is purely not safe. And is leaving a lot of security decision to non-secuirty experts such as Developer. What are these choices? Algorithm, Library that MUST understands the RFC which allow some security choices to developer that uses the library.</p>
			<p>This basically create a lot of loop holes</p>
		</Notes>
	</Slide>
	<Slide animate>
		<h1 data-id="pasteo" class="font-mono text-4xl">PASETO 101 - anatomy</h1>
		<code class="text-center text-2xl mt-5">
			{'<version>.<\'local\'|\'public\'>.<payload>'}
		</code>
		<Notes>
			<p>We won't go into deeper details with this library as it has a lot more details.</p>
			<p>However let's highlight the key-differences. Unlike JWT, content of the pasteo are always encrypted. The key important is the encryption suite is never been the choices for Developer. It creates the lesser flexibility however promote the security.</p>
		</Notes>
	</Slide>
	<Slide animate>
		<h1 class="font-mono">sender constraint.</h1>
	</Slide>
	<Slide animate>
		<h1 class="font-mono">sender constraint.</h1>
		<h2 class="font-mono text-3xl mt-5">mTLS</h2>
		<p class="font-mono text-xl mt-2">Mutual Transport Layer Security</p>
		<p class="font-mono underline text-lg mt-3">transport layer</p>
	</Slide>
	<Slide animate>
		<h2 class="font-mono text-3xl">mTLS</h2>
		<Step fadeIn><h2 class="font-mono text-3xl">TLS</h2></Step>
	</Slide>
	<Slide animate>
		<h2 class="font-mono text-3xl">TLS</h2>
		<div class="flex mt-3">
			<div class="w-1/4 rounded-xl bg-indigo-500 font-mono p-5 h-full">
				<p class="text-xl">client</p>
			</div>
			<div class="w-1/2 relative m-3">
				{#each tlsSteps as step}
					<Step fadeInThenOut class="absolute inset-0">
						<Communication dir={step.dir} title={step.title} subtitle={step.subtitle} />
					</Step>
				{/each}
			</div>
			<div class="w-1/4 rounded-xl bg-orange-400 font-mono p-5 h-full">
				<p class="text-xl">server</p>
			</div>
		</div>
	</Slide>
	<Slide>
		<h2 class="font-mono text-3xl">mTLS</h2>
		<div class="flex mt-3">
			<div class="w-1/4 rounded-xl bg-indigo-500 font-mono p-5 h-full">
				<p class="text-xl">client</p>
			</div>
			<div class="w-1/2 relative m-3">
				{#each mtlsSteps as step}
					<Step fadeInThenOut class="absolute inset-0">
						<Communication dir={step.dir} title={step.title} subtitle={step.subtitle} />
					</Step>
				{/each}
			</div>
			<div class="w-1/4 rounded-xl bg-orange-400 font-mono p-5 h-full">
				<p class="text-xl">server</p>
			</div>
		</div>
	</Slide>
	<Slide>
		<h2 class="font-mono text-3xl">mTLS</h2>
		<div class="flex mt-3">
			<div class="w-1/4 rounded-xl bg-indigo-500 font-mono p-5 h-full">
				<p class="text-xl">client</p>
				<code class="text-sm mt-3">certificate</code>
			</div>
			<div class="w-1/2 relative flex flex-col justify-center items-center p-3">
				<Communication dir=">"
					title="attached client credential"
					subtitle="finger print with the JWT payload"/>
			</div>
			<div class="w-1/4 rounded-xl bg-orange-400 font-mono p-5 h-full">
				<p class="text-xl">server</p>
				<code class="text-sm mt-3">certificate</code>
			</div>
		</div>
		<div>
			<pre class="mt-3 text-sm">
				<code class="language-json text-sm" data-trim> 
{`// example of confirmation within the AccessToken
{
	"cnf": {
		"x5t#S256": "nyJ-boWc-MUQgAe7c2Fpy23enSim5-eKaGgC8dHmYX4"
	}
}`}
				</code>
			</pre>
		</div>
		<Notes>Now underlying transport layer has been using 2 certificates</Notes>
	</Slide>
	<Slide>
		<h1 class="font-mono">sender constraint.</h1>
		<h2 class="font-mono text-3xl mt-5">DPoP</h2>
		<p class="font-mono text-xl mt-2">Demonstration Proof of Possession</p>
		<p class="font-mono underline text-lg mt-2">application layer</p>
		<Notes>
			this means it doesn't need PKI (Public Key Infrastructure to facilitate the validation.). It just relies on
			our good old asymmetric cryptographic technique.
		</Notes>
	</Slide>
	<Slide animate>
		<h2 class="font-mono text-3xl">DPoP</h2>
		<div class="flex justify-center">
			<DPoP id="dpop-dgram" class="w-1/2"/>
		</div>
		<p class="font-mono text-sm">
			ref: <a href="https://cloudentity.com/developers/blog/mtls_vs_dpop/">https://cloudentity.com/developers/blog/mtls_vs_dpop/</a>
		</p>
	</Slide>
	<Slide animate>
		<h2 class="font-mono text-3xl">DPoP</h2>
		<div class="flex">
			<DPoP id="dpop-dgram" class="w-1/2"/>
			<div class="w-1/2 relative">
				<Step fadeInThenOut class="absolute inset-0 flex flex-col justify-center">
					<pre>
						<code class="language-json text-sm" data-line-numbers="4-8" data-trim> 
							{`
// DPoP header
{
	"alg": "PS256",
	"jwk": {
		"kty": "RSA",
		"n": "ll7x-VAQlsnf4Td5xKsKGgQtDUZj5uG4Fh-mDODe5n6iz_a7Of4WWkUMWacx4JWtbnjzJ8MfWVMcYXgBky1XQB9IcQ7M7otT60cULLKqXAlhxX6AWSlTwfyvNeXOFc4kjzZwU6yvfv4HpPlhzOob3cImjSx4hAWSsDC3igzzHdODFrt3nW8KApQObqQpMFcSuQLu3SshrC9GLnRYs7gxcs9qvfXcgHkPCmcCgbV4VjwbTtw3OyPeHMlJ0AoHt_ZXS6gIiwzUKlCp6MKn0OIH8XMSp4foYYNlSPW7OE0iLca8AJew9DsjtjhATbO-pldTpmNpYqpdrS1v0G3Tzxevfw",
		"e": "AQAB"
	},
	"typ": "dpop+jwt"
}
							`}
						</code>
					</pre>
				</Step>
				<Step fadeInThenOut class="absolute inset-0 flex flex-col justify-center">
					<pre>
						<code class="language-json text-sm" data-line-numbers="|5" data-trim> 
							{`
// DPoP payload
{
	"htm": "POST",
	"htu": "https://oauth2c.us.authz.cloudentity.io/oauth2c/demo/oauth2/token",
	"jti": "31f8cfaa-2ed2-479a-b1ce-afe864b4a07e",
	"iat": 1684313563
}
							`}
						</code>
					</pre>
				</Step>
				<Step fadeIn class="absolute inset-0 flex flex-col justify-center">
					<pre>
						<code class="language-json text-sm" data-line-numbers="|4|13" data-trim>{`// the access token 
{
  "cnf": {
    "jkt": "RDweqX6qcVfPJYxuCw543HmetWz2RfjJGcOrEH9e3Hg"
  }
}
// DPoP payload
{
  "htm": "GET",
  "htu": "https://example.com/resource",
  "jti": "afe864b4a07e-2ed2-b1ce-479a-31f8cfaa",
  "iat": 1684314808
  "ath": "7msSQlMTsPnQTiXfgyf804NTDYNUMcQ5wj88J2dFDN4"
}`}
						</code>
					</pre>
				</Step>
			</div>
		</div>
		<p class="font-mono text-sm">
			ref: <a href="https://cloudentity.com/developers/blog/mtls_vs_dpop/">https://cloudentity.com/developers/blog/mtls_vs_dpop/</a>
		</p>
		<Notes>
			Example: "alg"; JWT was desgined so that it can handle dynamic of signing classes
			hence "alg" also supports "none" value. This is completely valid JWT class and
			it will went through if your code doesn't validate the supported algorithms.

			<p>
				- jti = JWT id
				- cnf = confirmation
			</p>
		</Notes>
	</Slide>
	<Slide animate class="font-mono">
		<h1 class="text-3xl">sender constraint.</h1>
		<div class="flex mt-3">
			<div class="w-1/2 p-3">
				<div class="flex flex-col">
					<h1 class="text-2xl">mTLS</h1>
					<code class="text-xl">Transport Layer</code>
					<code class="text-xl">hard</code>
					<code class="text-xl">small</code>
					<p class="text-xl">no need to do anything else</p>
				</div>
			</div>
			<div class="w-1/2 p-3">
				<div class="flex flex-col justify-center">
					<h1 class="text-2xl">DPoP</h1>
					<code class="text-xl">Application Layer</code>
					<code class="text-xl">easy</code>
					<code class="text-xl">large</code>
					<p class="text-xl">need to generate DPoP on all requests</p>
				</div>
			</div>
		</div>
	</Slide>
</section>
