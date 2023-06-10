<script>
	import { onMount } from 'svelte';

	import { AlertDemo, ButtonDemo, HeadingDemo, IconDemo, ModalDemo, SpinnerDemo } from '$lib/demos';
	import { Divider, Heading, Link } from '$lib/components';

	onMount(async () => {
		const { Modal, initTE } = await import('tw-elements');
		initTE({ Modal });
	});
</script>

<main class="p-8">
	<Heading tag="h1">UI Demos</Heading>
	<p class="pl-0.5">
		UI demos of components mostly based on
		<Link href="https://tailwind-elements.com/" isExternal classes="font-bold">
			Tailwind Elements
		</Link>
	</p>

	<ModalDemo />

	<Heading classes="mt-4" tag="h4">Table of Contents</Heading>
	<ul class="ml-6 list-disc">
		<li><a href="#components">General Components</a></li>
		<li><a href="#typography">Typography</a></li>
		<li><a href="#icons-heading">Icons</a></li>
	</ul>
	<Divider />

	<Heading id="components" tag="h2">General Components</Heading>
	<AlertDemo />
	<ButtonDemo />
	<SpinnerDemo />
	<Divider />

	<!-- <Heading tag="h2">Form Stuff</Heading>
	<Divider /> -->

	<Heading id="typography" tag="h2">Typography</Heading>
	<HeadingDemo />
	<Divider />

	<Heading id="icons-heading" tag="h2">Icons!</Heading>
	<IconDemo />
</main>
