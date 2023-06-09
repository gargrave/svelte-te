<script lang="ts">
	import Divider from './Divider.svelte';
	import Heading from './Heading.svelte';

	export let title: string;
</script>

<section class="p-4 m-4 rounded bg-zinc-700 border border-zinc-600">
	<Heading tag="h2">{title}</Heading>
	<Divider />
	<slot />
</section>
