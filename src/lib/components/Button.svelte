<!-- https://tailwind-elements.com/docs/standard/components/buttons -->
<!-- https://getbootstrap.com/docs/5.3/components/buttons -->
<script lang="ts">
	import Spinner from './Spinner.svelte';
	import type { ColorType } from './components.types';

	const buttonTypeStyles: Record<ColorType, string> = {
		primary: 'bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700',
		secondary:
			'bg-secondary-200 hover:bg-secondary-400 focus:bg-secondary-400 active:bg-secondary-500',
		success: 'bg-success hover:bg-success-600  focus:bg-success-600 active:bg-success-700',
		danger: 'bg-danger hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-700',
		warning: 'bg-warning hover:bg-warning-600 focus:bg-warning-600 active:bg-warning-700',
		info: 'bg-info hover:bg-info-600 focus:bg-info-600 active:bg-info-700'
	};

	const textColor: Record<ColorType, string> = {
		primary: 'text-white',
		secondary: 'text-secondary-800',
		success: 'text-white',
		danger: 'text-white',
		warning: 'text-white',
		info: 'text-white'
	};

	// TODO: 'link' type button
	// TODO: 'outline' type button
	// TODO: disabled state + styling
	// TODO: buttons with loaders

	export let colorType: ColorType = 'primary';
	export let block = false;
	export let type: 'button' | 'submit' = 'button';
	export let isLoading = false;
</script>

<button
	{type}
	class="{buttonTypeStyles[colorType]} {textColor[colorType]}
		inline-block relative rounded px-6 pb-2 pt-2.5 text-sm
		font-medium uppercase leading-normal
		transition duration-150 ease-in-out
		focus:outline-none focus:ring-0
		shadow-[0_4px_9px_-4px_#3b71ca]
		hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
		focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
		active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
		dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
		dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
		dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
		dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
	class:w-full={block}>
	<slot />
	{#if isLoading}<Spinner asOverlay size="sm" color="text-neutral-200" />{/if}
</button>