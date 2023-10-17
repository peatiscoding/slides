<script>
	import 'iconify-icon'
	import { Notes, Slide, Step } from '@components'
	import readerImageUrl from '../../assets/reader.webp?url'
	import fbiBadgeImageUrl from '../../assets/fbi-badge.jpg?url'
</script>

<section>
	<Slide animate>
		<h1 class="font-mono text-4xl mb-5">classification. type of tokens.</h1>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-4xl mb-5">classification. type of tokens.</h1>
		<div class="flex justify-center items-center">
			<p class="font-mono text-3xl p-5">by responsibility<br/><span class="text-xl">(function)</span></p>
		</div>
		<div class="flex justify-center items-center">
			<Step fadeIn class="font-mono text-3xl p-5">by nature<br/><span class="text-xl">(format)</span></Step>
		</div>
	</Slide>
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
			<Step order="1" class="flex flex-col justify-center items-center bg-indigo-500 rounded-xl p-8">
				<iconify-icon icon="ri:account-circle-fill" width="64" />
				<span class="font-mono text-4xl m-2">authentication</span>
			</Step>
			<Step order="3" class="w-[120px]">
				<iconify-icon icon="ic:round-not-equal" width="64" />
			</Step>
			<Step order="2" class="flex flex-col justify-center items-center bg-orange-500 rounded-xl p-8">
				<iconify-icon icon="ri:checkbox-circle-line" width="64" />
				<span class="font-mono text-4xl m-2">authorization</span>
			</Step>
		</div>
		<Notes>
			these 2 basic important concepts.
			authen is not equates authorization
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
		<div class="flex justify-center items-center">
			<div class="flex flex-col justify-center items-center bg-indigo-500 rounded-xl p-8">
				<iconify-icon icon="ri:account-circle-fill" width="64" />
				<span class="font-mono text-4xl m-2">authentication</span>
				<Step order="3" class="font-mono text-2xl m-2 mt-[60px]">identity provider</Step>
				<Step order="5" fadeDown>
					<iconify-icon icon="ri:arrow-down-line" class="mt-3" style="color: #ccc;" />
					<code class="font-mono text-2xl m-2">id_token</code>
				</Step>
			</div>
			<div class="w-[70px]"></div>
			<div class="flex flex-col justify-center items-center bg-orange-500 rounded-xl p-8">
				<iconify-icon icon="ri:checkbox-circle-line" width="64" />
				<span class="font-mono text-4xl m-2">authorization</span>
				<Step order="4" class="font-mono text-2xl m-2 mt-[60px]">auth server</Step>
				<Step fadeDown order="6">
					<iconify-icon icon="ri:arrow-down-line" class="mt-3" style="color: #ccc;" />
					<code class="font-mono text-2xl m-2">access_token</code>
				</Step>
			</div>
		</div>
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
	<!-- Let's see its nature (opaque token; stateless token) -->
	<Slide animate>
		<h1 class="font-mono text-4xl">classification - by nature</h1>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-4xl">classification - by nature</h1>
		<div class="h-[24px]"></div>
		<Step><code data-id="opqt">opaque token</code></Step>
		<Step fadeIn><code data-id="stlt">stateless token</code></Step>
		<Notes>
			<p>
				There are 2 major types of Tokens here, `opaqueToken` and
				`statelessToken`
			</p>
		</Notes>
	</Slide>
	<Slide animate>
		<div class="flex justify-center items-center">
			<Step class="w-1/2 p-3 mx-auto">
				<img src={readerImageUrl} class="" alt="stateful token" />
				<Step><code class="text-2xl p-3 mx-auto">opaque token</code></Step>
			</Step>
		</div>
		<Notes>
			<p>
				The Opaque token - or stateful token - is the token that expose very
				limited information to the bearer - data will be held using service or typically the Database
				of the token's issuer. - validation need to consult with token's issuer.

				Consider enter parking lot and they give you a Card. Or when you enter some building and they asked
				you to trade in your ID Card for theirs. These card represent an opaque token that only deviced
				registered with the system (elevator/gate) would let you through.

				Example; Refresh Token, PHP Session Key.
			</p>
		</Notes>
	</Slide>
	<Slide>
		<div class="flex justify-center items-center">
			<Step class="w-1/2 p-3 mx-auto">
				<img src={fbiBadgeImageUrl} class="" alt="stateless token" />
				<Step><code class="text-2xl p-3 mx-auto">stateless token</code></Step>
			</Step>
		</div>
		<Notes>
			<p>
				The Stateless token provide the information to the bearer in plain
				sight. Also provide a way to validate the authenticity of it. This
				promototes scalibility. Concept is to send the data that ought to be
				queried anyway along with the token. And provide a means for consumer to
				validate them.

				to combine by -- why? this is actually the beauty of cryptographic library that 
				massively make this function possible in the most practical way.

				The best part of the stateless token is it scales massively.

				Example; JWT, PASETO
			</p>
		</Notes>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-3xl mb-5">Comparison</h1>
		<table class="font-mono text-2xl table-auto">
			<thead>
				<tr>
					<th></th>
					<th>opaque (stateful)</th>
					<th>stateless</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>security</th>
					<td>more secure</td>
					<td>hard to make it secure</td>
				</tr>
				<tr>
					<th>payload size</th>
					<td>tiny</td>
					<td>big</td>
				</tr>
				<tr>
					<th>modification</th>
					<td rowspan="2">any time</td>
					<td rowspan="2">upon expiration</td>
				</tr>
				<tr>
					<th>revocation</th>
				</tr>
				<tr>
					<th>validation</th>
					<td>with service</td>
					<td>with cryptography</td>
				</tr>
				<tr>
					<th>scaling</th>
					<td>hard</td>
					<td>easy</td>
				</tr></tbody
			>
		</table>
	</Slide>
	<Slide>
		<p class="font-mono text-xl">
			These 2 concepts are not always binary; in system designs these philosophy of stateful and stateless can be leveraged in many places.
		</p>
		<Notes>
			Now here is the key takeaway!

			You can create a stateless object that only known within your system pass that around as an opaque token to public eyes.
		</Notes>
	</Slide>
</section>
