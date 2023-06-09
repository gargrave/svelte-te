<script lang="ts">
	import { fade } from 'svelte/transition';

	// https://tailwind-elements.com/docs/standard/components/spinners

	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type Width = 'sm' | 'md' | 'lg';

	const sizes: Record<Size, number> = {
		xs: 4,
		sm: 6,
		md: 8,
		lg: 10,
		xl: 12
	};

	const widths: Record<Width, number> = {
		sm: 2,
		md: 3,
		lg: 4
	};

	export let size: Size = 'md';
	export let width: Width = 'md';
	export let color = 'text-neutral-100';
	export let asOverlay = false;

	$: sizeStyle = `h-${sizes[size]} w-${sizes[size]}`;
	$: overlayStyle = asOverlay ? 'absolute left-1/2 top-1/2 trans-neg-50' : 'inline-block';
</script>

{#if asOverlay}
	<div class="absolute fill-parent bg-gray-700 bg-opacity-70" transition:fade={{ duration: 100 }} />
{/if}

<div class="{sizeStyle} {overlayStyle}">
	<div
		class="inline-block {sizeStyle}
			animate-spin rounded-full {color}
			border-{widths[width]} border-solid border-current border-r-transparent
			motion-reduce:animate-[spin_1.5s_linear_infinite]"
		style:animation-duration={'.85s'}
		role="status">
		<span
			class="!absolute !-m-px !h-px !w-px !overflow-hidden
			!whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
			Loading...
		</span>
	</div>
</div>
