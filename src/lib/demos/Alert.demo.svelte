<script>
	import { Alert, Heading } from '$lib/components';
	import { colorTypes } from './demos.helpers';
	import UiSection from './UiSection.svelte';

	let hideIcon = false;
</script>

<UiSection title="Alert">
	<div slot="blurb">
		<div class="mt-5">
			<!-- TODO: replace with checkbox component when it exists -->
			<label>
				<input type="checkbox" checked={hideIcon} on:change={() => (hideIcon = !hideIcon)} />
				Hide icons
			</label>
		</div>
	</div>

	<Heading tag="h5">Basic Alert types</Heading>
	<div class="mt-4 flex flex-col gap-2">
		{#each colorTypes as colorType}
			<Alert {colorType} {hideIcon}>
				<span>This is a <b>{colorType}</b> type Alert! Use it to convery some {colorType}.</span>
			</Alert>
		{/each}
	</div>
</UiSection>
