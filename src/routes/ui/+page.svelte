<script>
	import { AlertDemo, ButtonDemo, HeadingDemo, IconDemo, SpinnerDemo } from '$lib/demos';
	import { Divider, Heading, Link } from '$lib/components';
</script>

<main class="p-8">
	<Heading tag="h1">UI Demos</Heading>
	<p class="pl-0.5">
		UI demos of components mostly based on
		<Link href="https://tailwind-elements.com/" isExternal classes="font-bold">
			Tailwind Elements
		</Link>
	</p>
	<Divider />

	<HeadingDemo />
	<AlertDemo />
	<ButtonDemo />
	<SpinnerDemo />
	<IconDemo />
</main>
