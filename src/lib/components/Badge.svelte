<!-- https://tailwind-elements.com/docs/standard/components/badges/ -->
<script lang="ts">
	import { select_multiple_value } from 'svelte/internal';
	import type { ColorType } from './components.types';

	type Size = 'sm' | 'md' | 'lg' | 'xl';

	const colorTypeStyles: Record<ColorType, string> = {
		primary: 'bg-primary-100 text-primary-700',
		secondary: 'bg-secondary-200 text-secondary-800',
		success: 'bg-success-100 text-success-700',
		danger: 'bg-danger-100 text-danger-700',
		warning: 'bg-warning-100 text-warning-800',
		info: 'bg-info-100 text-info-800'
	};

	const textSizes: Record<Size, string> = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base',
		xl: 'text-lg'
	};

	export let colorType: ColorType = 'primary';
	export let size: Size = 'sm';
	export let rounded = false;
</script>

<span
	class="inline-block whitespace-nowrap {rounded ? 'rounded-full' : 'rounded-[0.27rem]'}
    px-[0.65em] pb-[0.25em] pt-[0.35em] text-center {textSizes[size]}
    align-baseline font-bold leading-tight {colorTypeStyles[colorType]}">
	<slot />
</span>
