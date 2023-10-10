<script>
	import 'iconify-icon'
	import { Notes, Slide, Step, Code } from '@components'
</script>

<section>
	<Slide animate>
		<h1 class="font-mono text-4xl">classification - by responsibility</h1>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-4xl">classification - by responsibility</h1>
		<div class="h-[24px]"></div>
		<Step fadeIn><code>access_token</code></Step>
		<Step fadeIn><code>refresh_token</code></Step>
		<Step fadeIn><code>id_token</code></Step>
	</Slide>
	<Slide>
		<div class="flex justify-center items-center">
			<Step order="1" class="flex flex-col justify-center items-center">
				<iconify-icon icon="ri:account-circle-fill" width="64" />
				<span class="font-mono text-4xl m-2">authentication</span>
				<Step order="3" class="font-mono text-2xl m-2 mt-[60px]">identity provider</Step>
				<Step order="5" fadeDown>
					<iconify-icon icon="ri:arrow-down-line" class="mt-3" style="color: #ccc;" />
					<code class="font-mono text-2xl m-2">id_token</code>
				</Step>
			</Step>
			<Step order="2" class="w-[70px]"></Step>
			<Step order="2" class="flex flex-col justify-center items-center">
				<iconify-icon icon="ri:checkbox-circle-line" width="64" />
				<span class="font-mono text-4xl m-2">authorization</span>
				<Step order="4" class="font-mono text-2xl m-2 mt-[60px]">auth server</Step>
				<Step fadeDown order="6">
					<iconify-icon icon="ri:arrow-down-line" class="mt-3" style="color: #ccc;" />
					<code class="font-mono text-2xl m-2">access_token</code>
				</Step>
			</Step>
		</div>
	</Slide>
	<Slide>
		<h1 class="font-mono text-2xl">overview</h1>
		<div class="flex justify-center items-center">
			<img src="assets/overview-1.svg" alt="overview of tokens"/>
		</div>
	</Slide>
	<Slide>
		<code>id_token</code>
		<Step class="m-3 text-3xl">
			the proof of <span class="underline"
				>authentication</span> of <span class="underline">the bearer</span
			>
		</Step>
		<Notes>
			<p>
				Normally the id_token issued along with the OAuth2.0 + OpenID framework.
				It is the set of identity information to of the user. Unlike the access
				token which focused on "Access" rather than the "identity". Which is
				actaully treated as extension of the OAuth2.0 framework
			</p>
			<p>
				An ID token is an artifact that proves that the user has been authenticated. It was introduced by OpenID Connect (OIDC), an open standard for authentication used by many identity providers such as Google, Facebook, and, of course, Auth0. Check out this document for more details on OpenID Connect. Let's take a quick look at the problem OIDC wants to resolve.
			</p>
		</Notes>
	</Slide>
	<Slide>
		<code>access_token</code>
		<Step class="m-3 text-3xl"
			>the proof of <span class="underline underline-offset-3"
				>authorization</span
			>
			of <span class="underline underline-offset-3">the bearer.</span></Step
		>
		<Notes>
			<p>
				Note the key word, "Accessilbiltiy" of the Bearer. So let's examine this
				wording a bit. "To access" - accessing what? - by whom is not the
				concern here.
			</p>
		</Notes>
	</Slide>
	<Slide>
		<code>refresh_token</code>
		<Step class="m-3 text-3xl">
			the token that represent <span class="underline"
				>the validity of the bearer</span
			>
			to hold such: <code>access_token + id_token</code>
		</Step>
	</Slide>
	<Slide>
		<h1 class="font-mono">Common Pitfall</h1>
		<Code lang="markdown" class="mt-5" lines="">
			{`
			- using tokens id_token in place of access_token.
			`}
		</Code>
	</Slide>
	<Slide>
		<h1 class="font-mono">Why is this important?</h1>
		<Code lang="markdown" class="mt-5" lines="">
			{`
		- secure. using token correctly will promote security. 
		- understanding. "Access" vs "Identity".
			`}
		</Code>
	</Slide>
</section>
