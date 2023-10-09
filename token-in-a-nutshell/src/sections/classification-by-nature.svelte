<script>
	import { Notes, Slide, Step } from '@components'
</script>

<section>
	<!-- Let's see its nature (opaque token; stateless token) -->
	<Slide animate>
		<h1 class="font-mono text-4xl">classification - by nature</h1>
	</Slide>
	<Slide animate>
		<Step fadeIn><code data-id="opqt">opaque token</code></Step>
		<Step fadeIn><code data-id="stlt">stateless token</code></Step>
		<Notes>
			<p>
				There are 2 major types of Tokens here, `opaqueToken` and
				`statelessToken`
			</p>
		</Notes>
	</Slide>
	<Slide animate>
		<div class="flex">
			<Step class="w-1/2 p-3 mx-auto">
				<img src="/assets/reader.webp" class="" alt="stateful token" />
			</Step>
			<Step class="w-1/2 p-3 mx-auto">
				<img src="/assets/fbi-badge.jpg" class="" alt="stateless token" />
			</Step>
		</div>
		<Notes>
			<p>
				The Opaque token - or stateful token - is the token that expose very
				limited information to the bearer - data will be held using service or typically the Database
				of the token's issuer. - validation need to consult with token's issuer.
			</p>
			<p>
				The Stateless token provide the information to the bearer in plain
				sight. Also provide a way to validate the authenticity of it. This
				promototes scalibility. Concept is to send the data that ought to be
				queried anyway along with the token. And provide a means for consumer to
				validate them.
			</p>
		</Notes>
	</Slide>
	<Slide animate>
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
</section>
