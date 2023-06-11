<script>
	import { Divider, Heading, Spinner } from '$lib/components';

	import UiSection from './UiSection.svelte';

	let overlaySpinner = false;
</script>

<UiSection title="Spinner">
	<p slot="blurb">Show a loading state!</p>

	<Heading tag="h5">Basic spinners</Heading>
	<Spinner size={'xs'} width={'sm'} />
	<Spinner size={'sm'} color="text-danger-600" />
	<Spinner color="text-success-600" />
	<Spinner size={'lg'} width={'lg'} color="text-info-600" />
	<Spinner size={'xl'} width={'lg'} color="text-warning-600" />
	<Divider />

	<Heading tag="h5">Overlaid on other content</Heading>
	<div class="mt-5">
		<!-- TODO: replace with checkbox component when it exists -->
		<label>
			<input
				type="checkbox"
				checked={overlaySpinner}
				on:change={() => (overlaySpinner = !overlaySpinner)} />
			Show overlay spinner
		</label>
	</div>

	<div class="relative p-2 mt-4 bg-info-800 flex-center rounded w-full h-24 text-white">
		<p class="text-xl">This is some text! The loader will cover this element when activated.</p>
		{#if overlaySpinner}<Spinner asOverlay size={'lg'} width={'lg'} />{/if}
	</div>
</UiSection>
