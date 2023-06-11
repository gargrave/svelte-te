<script>
	import { onMount } from 'svelte';

	import {
		AlertDemo,
		ButtonDemo,
		HeadingDemo,
		IconDemo,
		InputFieldDemo,
		ModalDemo,
		SpinnerDemo
	} from '$lib/demos';
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

	<Heading classes="mt-4" tag="h4">Table of Contents</Heading>
	<ul class="ml-6 list-disc">
		<li><a href="#components">General Components</a></li>
		<li><a href="#typography">Typography</a></li>
		<li><a href="#icons-heading">Icons</a></li>
	</ul>
	<Divider />

	<Heading classes="!my-8 text-center text-5xl" id="components" tag="h2">
		General Components
	</Heading>
	<AlertDemo />
	<ButtonDemo />
	<ModalDemo />
	<SpinnerDemo />
	<Divider />

	<Heading classes="!my-8 text-center text-5xl" id="forms" tag="h2">Form Stuff</Heading>
	<InputFieldDemo />
	<Divider />

	<Heading classes="!my-8 text-center text-5xl" id="typography" tag="h2">Typography</Heading>
	<HeadingDemo />
	<Divider />

	<Heading classes="!my-8 text-center text-5xl" id="icons-heading" tag="h2">Icons!</Heading>
	<IconDemo />
</main>
