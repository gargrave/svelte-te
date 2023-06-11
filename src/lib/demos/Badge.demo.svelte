<script>
	import { Badge, Divider, Heading } from '$lib/components';
	import { colorTypes } from './demos.helpers';
	import UiSection from './UiSection.svelte';
</script>

<UiSection title="Badge">
	<div slot="blurb">
		<p>Use these to display <em>just a little bit</em> of info.</p>
	</div>

	<Heading tag="h5">Basic Badge types</Heading>
	<div class="mt-4 flex flex-wrap items-end gap-2">
		{#each colorTypes as colorType}
			<Badge {colorType}>
				<span>{colorType}</span>
			</Badge>
		{/each}
	</div>
	<Divider />

	<Heading tag="h5">Rounded badges</Heading>
	<div class="mt-4 flex flex-wrap items-end gap-2">
		{#each colorTypes as colorType}
			<Badge {colorType} rounded>
				<span>{colorType}</span>
			</Badge>
		{/each}
	</div>
	<Divider />

	<Heading tag="h5">Different sizes (default is 'sm')</Heading>
	<div class="mt-4 flex flex-wrap items-end gap-2">
		<Badge colorType="primary">Primary sm</Badge>
		<Badge colorType="secondary" size="md">Secondary md</Badge>
		<Badge colorType="success" size="lg">Success lg</Badge>
		<Badge colorType="danger" size="xl">Danger xl</Badge>
	</div>
</UiSection>
