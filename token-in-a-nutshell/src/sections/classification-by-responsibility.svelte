<script>
	import { Notes, Slide, Step, Code } from '@components'
</script>

<section>
	<Slide animate>
		<h1 class="font-mono text-4xl">classification - by responsibility</h1>
	</Slide>
	<Slide animate>
		<div>
			<Step fadeIn><code>access_token</code></Step>
			<Step fadeIn><code>refresh_token</code></Step>
			<Step fadeIn><code>id_token</code></Step>
		</div>
	</Slide>
	<Slide>
		<code>access_token</code>
		<Step class="m-3 text-3xl"
			>a token that represents <span class="underline underline-offset-3"
				>"Accessibility"</span
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
		<p class="m-3 text-3xl">
			the token that represent <span class="underline"
				>the validity of the bearer</span
			>
			to hold such information typically <code>access_token</code> +
			<code>id_token</code>
		</p>
	</Slide>
	<Slide>
		<code>id_token</code>
		<p class="m-3 text-3xl">
			the token that represents <span class="underline"
				>the identity of the bearer</span
			>
		</p>
		<Notes>
			<p>
				Normally the id_token issued along with the OAuth2.0 + OpenID framework.
				It is the set of identity information to of the user. Unlike the access
				token which focused on "Access" rather than the "identity". Which is
				actaully treated as extension of the OAuth2.0 framework
			</p>
		</Notes>
	</Slide>
	<Slide>
		<h1 class="font-mono">Why is this important?</h1>
		<Code lang="markdown" class="mt-5" lines="">
			{`
		- intro. what's token? 
		- classification. type of tokens.
		- usage. how and when to use it.
		- deep dive. stateless token.
		- talk. question & answer.
			`}
		</Code>
	</Slide>
</section>
