<script lang="ts">
	import { Divider, Heading } from '$lib/components';

	export let id = '';
	export let title: string;

	$: link = id || title.toLowerCase();
</script>

<section id={link} class="p-4 my-4 rounded bg-zinc-700 border border-zinc-600">
	<Heading classes="hover:underline" tag="h2"><a href="#{link}">{title}</a></Heading>
	<slot name="blurb" />
	<Divider />
	<slot />
</section>
