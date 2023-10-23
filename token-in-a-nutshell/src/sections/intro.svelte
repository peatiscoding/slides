<script>
	import 'iconify-icon'
	import { Code, Slide } from "@components"

</script>
<section>
	<Slide animate>
		<Code lang="markdown">
			{`
			# Goals

			- differences between _access_ vs _identity_.
			- differences between _stateful_ vs _stateless_.
			- our current toolbox.
			- how to utilize them.
			- look ahead. the emerging concepts & tools
				* _sender constraints_,
				* _paseto_,
			`}
		</Code>
	</Slide>
	<Slide animate>
		<Code lang="markdown" lines="|3|4|5|6|7">
			{`
			# Agenda

			- intro. what's token? 
			- classification. types of token.
			- usage. how and when to use it.
			- deep dive. stateless token.
			- talk. question & answer.
				`}
		</Code>
	</Slide>
	<!-- Imagine getting into a building -->
	<Slide animate>
		<div class="flex justify-center items-center">
			<div data-id="intro-panel" class="w-1/2">
				<span class="font-mono text-4xl">intro. what's token?</span>
			</div>
		</div>
	</Slide>
	<Slide animate>
		<div class="p-7">
			<h1 class="font-serif text-left text-5xl">to·ken</h1>
			<h2 class="font-mono text-left text-xl mt-2">/ˈtōk(ə)n/</h2>
			<p class="font-serif text-left text-xl mt-5"><span data-id="d">a thing serving as a visible or tangible representation of</span> <span data-id="a">a fact</span></p>
		</div>
	</Slide>
	<Slide animate>
		<div class="p-7">
			<h1 class="font-serif text-left text-5xl">to·ken</h1>
			<h2 class="font-mono text-left text-xl mt-2">/ˈtōk(ə)n/</h2>
			<p class="font-serif text-left text-xl mt-5"><span data-id="d">a thing serving as a visible or tangible representation of</span> <span data-id="a" class="underline underline-offset-4">a fact</span></p>
		</div>
	</Slide>
	<Slide animate>
		<div class="p-7">
			<h1 class="font-serif text-left text-5xl">to·ken</h1>
			<h2 class="font-mono text-left text-xl mt-2">/ˈtōk(ə)n/</h2>
			<p class="font-serif text-left text-xl mt-5"><span data-id="d">a thing serving as a visible or tangible representation of</span> <span data-id="a" class="underline underline-offset-4 fade-up">a state</span></p>
		</div>
	</Slide>
	<Slide animate>
		<div class="p-7">
			<h1 class="font-serif text-left text-5xl">to·ken</h1>
			<h2 class="font-mono text-left text-xl mt-2">/ˈtōk(ə)n/</h2>
			<p class="font-serif text-left text-xl mt-5"><span data-id="d">a thing serving as a visible or tangible representation of</span> <span data-id="a" class="underline underline-offset-4">the information</span></p>
		</div>
	</Slide>
	<Slide animate>
		<div class="p-7">
			<h1 class="font-serif text-left text-5xl">to·ken</h1>
			<h2 class="font-mono text-left text-xl mt-2">/ˈtōk(ə)n/</h2>
			<p class="font-serif text-left text-xl mt-5"><span data-id="d">a thing serving as a visible or tangible representation of</span> <span data-id="a" class="underline underline-offset-4">the identity</span></p>
		</div>
	</Slide>
	<Slide animate>
		<div class="p-7">
			<h1 class="font-serif text-left text-5xl">to·ken</h1>
			<h2 class="font-mono text-left text-xl mt-2">/ˈtōk(ə)n/</h2>
			<p class="font-serif text-left text-xl mt-5"><span data-id="d">a thing serving as a visible or tangible representation of</span> <span data-id="a" class="underline underline-offset-4">the access rights</span></p>
		</div>
	</Slide>
</section>
