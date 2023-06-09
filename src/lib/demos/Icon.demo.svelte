<script>
	import { Divider, Icon, Link, Range } from '$lib/components';
	import { iconMap } from '$lib/components/svg/IconMap';
	import UiSection from './UiSection.svelte';

	let size = 36;
</script>

<UiSection title="Icon">
	<div slot="blurb">
		<p>
			Lots of icons built with
			<Link href="https://heroicons.com/" isExternal classes="font-bold">Hero Icons</Link>
		</p>
		<p>Changing text color will change the color of the icon.</p>
	</div>

	<div class="max-w-md">
		<Range
			bind:value={size}
			id="iconSize"
			label="Adjust Icon Size ({size}px)"
			min={8}
			max={96}
			step={2} />
	</div>
	<Divider />

	{#each Object.keys(iconMap) as icon}
		<div>
			<Icon {icon} {size} />
			<span>{icon}</span>
		</div>
	{/each}
</UiSection>
