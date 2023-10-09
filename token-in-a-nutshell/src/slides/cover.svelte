<script lang="ts">
import { Slide, Code } from '@components'

export let highlights: string
</script>

<Slide animate>
	<Code lang="markdown" lines={highlights}>
		{`
		# Agenda

		- intro. what's token? 
		- classification. type of tokens.
		- usage. how and when to use it.
		- deep dive. stateless token.
		- talk. question & answer.
			`}
	</Code>
</Slide>
