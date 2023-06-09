<script>
	import { Button, Divider, Heading } from '$lib/components';
	import { UiSection } from '$lib/demos';
	import { colorTypes } from './demos.helpers';

	let isLoading = false;
</script>

<UiSection title="Button">
	<div slot="blurb">
		<p>Buttons! Click on them to make cool stuff happen!</p>
		<label>
			<input
				class="mt-4"
				type="checkbox"
				checked={isLoading}
				on:change={() => (isLoading = !isLoading)} />
			Show loaders
		</label>
	</div>

	<Heading tag="h5">Basic button types</Heading>
	<!-- TODO: replace with checkbox component when it exists -->

	<div class="flex flex-wrap gap-2">
		{#each colorTypes as colorType}
			<Button {colorType} {isLoading}>{colorType}</Button>
		{/each}
	</div>
	<Divider />

	<Heading tag="h5">Block buttons</Heading>
	<p>Block buttons take up the full width of the container.</p>
	<div class="mt-4 flex flex-col gap-2">
		{#each colorTypes as colorType}
			<Button {colorType} block {isLoading}>{colorType}</Button>
		{/each}
	</div>
</UiSection>
