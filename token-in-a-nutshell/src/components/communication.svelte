<script lang="ts">
export let dir: '>' | '<' | '<.' | '.>' | '<.>' | '><'
export let title: string
export let subtitle: string
</script>
<div class="relative flex flex-col justify-center h-full">
	<p class="font-mono text-xl">{title}</p>
	<p class="font-mono text-lg">{subtitle}</p>
</div>
<!-- LTR -->
{#if dir === '>'}
	<svg class="absolute right-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
{:else if dir === '<'}
	<svg class="absolute left-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
{:else if dir === '><'}
	<svg class="absolute left-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
	<svg class="absolute right-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.53 5.47a.75.75 0 0 1 0 1.06l-4.72 4.72H20a.75.75 0 0 1 0 1.5H5.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/></svg>
{/if}

{#if dir === '<.' || dir === '<.>'}
<svg class="absolute left-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16"><g transform="rotate(-90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z" clip-rule="evenodd"/></g></svg>
{/if}
{#if dir === '.>' || dir === '<.>'}
	<svg class="absolute right-0 top-0 h-full" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16"><g transform="rotate(90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z" clip-rule="evenodd"/></g></svg>
{/if}
