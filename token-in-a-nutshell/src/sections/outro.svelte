<script>

	import { FitText, Slide } from "@components"
	import QrCode from 'svelte-qrcode'

	const slideUrl = 'token-in-a-nutshell.pages.dev'

</script>
<section>
	<Slide class="font-serif">
		<FitText>UNDERSTAND AND KNOW YOUR TOOLS</FitText>
		<FitText>THIS IS THE WAY</FitText>
	</Slide>
	<Slide animate>
		<h1 class="font-mono text-3xl p-5">thank you</h1>
		<h2 class="font-mono text-2xl mt-3">talk. question & answer.</h2>
	</Slide>
	<Slide animate class="text-left">
		<span class="font-mono text-lg">slides are available at</span>
		<div class="flex justify-start content-center h-[100px] mt-3">
			<QrCode value={`https://${slideUrl}`} background="#FFF" class="w-[64px]"/>
		</div>
		<a class="font-mono text-xl underline" href={`/${slideUrl}`}>{slideUrl}</a>
		<p class="font-mono text-lg text-left mt-20 text-indigo-500">refs</p>
		<ul class="font-mono text-sm mt-3 text-left">
			<li><a href="https://thenewstack.io/the-different-token-types-and-formats-explained/" target="_blank">https://thenewstack.io/the-different-token-types-and-formats-explained/</a></li>
			<li><a href="https://dev.to/techschoolguru/why-paseto-is-better-than-jwt-for-token-based-authentication-1b0c" target="_blank">https://dev.to/techschoolguru/why-paseto-is-better-than-jwt-for-token-based-authentication-1b0c</a></li>
			<li><a href="https://auth0.com/blog/id-token-access-token-what-is-the-difference/" target="_blank">https://auth0.com/blog/id-token-access-token-what-is-the-difference/</a></li>
			<li><a href="https://auth0.com/blog/identity-unlocked-explained-episode-1/" target="_blank">https://auth0.com/blog/identity-unlocked-explained-episode-1/</a></li>
			<li><a href="https://developer.okta.com/blog/2019/10/17/a-thorough-introduction-to-paseto" target="_blank">https://developer.okta.com/blog/2019/10/17/a-thorough-introduction-to-paseto</a></li>
			<li><a href="https://www.scottbrady91.com/jose/jwts-which-signing-algorithm-should-i-use" target="_blank">https://www.scottbrady91.com/jose/jwts-which-signing-algorithm-should-i-use</a></li>
			<li><a href="https://paragonie.com/blog/2017/03/jwt-json-web-tokens-is-bad-standard-that-everyone-should-avoid" target="_blank">https://paragonie.com/blog/2017/03/jwt-json-web-tokens-is-bad-standard-that-everyone-should-avoid</a></li>
			<li><a href="https://medium.com/mattr-global/jwm-a-new-standard-for-secure-messaging-a21d3daa4403" target="_blank">https://medium.com/mattr-global/jwm-a-new-standard-for-secure-messaging-a21d3daa4403</a></li>
			<li><a href="https://cloudentity.com/developers/blog/mtls_vs_dpop/" target="_blank">https://cloudentity.com/developers/blog/mtls_vs_dpop/</a></li>
		</ul>
	</Slide>
</section>
