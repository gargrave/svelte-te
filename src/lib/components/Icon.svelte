<!-- https://heroicons.com -->
<script lang="ts">
	import { iconMap, type IconType } from './svg/IconMap';

	export let icon: IconType;
	export let size = 24;
	export let classes = '';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="2"
	stroke="currentColor"
	class="inline-block {classes}"
	style:height={size}
	style:width={size}>
	<svelte:component this={iconMap[icon]} />
</svg>
