<script>
	import { Heading, Link } from '$lib/components';
</script>

<svelte:head>
	<title>Svelte TE | Home</title>
</svelte:head>

<main class="p-8">
	<Heading tag="h1">Tailwind Essentials Demos</Heading>
	<ul class="ml-6 list-disc">
		<li><Link href="/ui" classes="text-xl">UI Demos</Link></li>
	</ul>
</main>
