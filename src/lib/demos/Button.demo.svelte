<script>
	import { Button, Divider, Heading } from '$lib/components';
	import { UiSection } from '$lib/demos';
	import { colorTypes } from './demos.helpers';

	let isLoading = false;
	let disabled = false;
</script>

<UiSection title="Button">
	<div slot="blurb">
		<p>Buttons! Click on them to make cool stuff happen!</p>
		<div class="mt-5 flex gap-4">
			<!-- TODO: replace with checkbox component when it exists -->
			<label>
				<input type="checkbox" checked={isLoading} on:change={() => (isLoading = !isLoading)} />
				Show loaders
			</label>

			<label>
				<input type="checkbox" checked={disabled} on:change={() => (disabled = !disabled)} />
				Disable all buttons
			</label>
		</div>
	</div>

	<Heading tag="h5">Basic button types</Heading>

	<div class="flex flex-wrap gap-2">
		{#each colorTypes as colorType}
			<Button {colorType} {isLoading} {disabled}>{colorType}</Button>
		{/each}
		<Button colorType="link" {isLoading} {disabled}>Link</Button>
		<Button colorType="ghost" {isLoading} {disabled}>Ghost</Button>
	</div>
	<Divider />

	<Heading tag="h5">Block buttons</Heading>
	<p>Block buttons take up the full width of the container.</p>
	<div class="mt-4 flex flex-col gap-2">
		{#each colorTypes as colorType}
			<Button {colorType} block {isLoading} {disabled}>{colorType}</Button>
		{/each}
	</div>
</UiSection>
