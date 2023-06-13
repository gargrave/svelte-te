<!-- https://tailwind-elements.com/docs/standard/components/buttons -->
<!-- https://getbootstrap.com/docs/5.3/components/buttons -->
<script lang="ts">
	import { _ } from '$lib/utils';
	import Spinner from './Spinner.svelte';
	import type { ColorType } from './components.types';

	type ButtonType = ColorType | 'link';

	const buttonTypeStyles: Record<ButtonType, string> = {
		primary:
			'bg-primary focus:bg-primary-600 active:bg-primary-700 [&:not(:disabled)]:hover:bg-primary-600',
		secondary:
			'bg-secondary-200 [&:not(:disabled)]:hover:bg-secondary-400 focus:bg-secondary-400 active:bg-secondary-500',
		success:
			'bg-success [&:not(:disabled)]:hover:bg-success-600 focus:bg-success-600 active:bg-success-700',
		danger:
			'bg-danger [&:not(:disabled)]:hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-700',
		warning:
			'bg-warning [&:not(:disabled)]:hover:bg-warning-600 focus:bg-warning-600 active:bg-warning-700',
		info: 'bg-info [&:not(:disabled)]:hover:bg-info-600 focus:bg-info-600 active:bg-info-700',
		link: '!px-3 bg-transparent [&:not(:disabled)]:hover:underline text-zinc-800 dark:text-zinc-100'
	};

	const textColor: Record<ButtonType, string> = {
		primary: 'text-white',
		secondary: 'text-secondary-800',
		success: 'text-white',
		danger: 'text-white',
		warning: 'text-white',
		info: 'text-white',
		link: 'text-white'
	};

	export let colorType: ButtonType = 'primary';
	export let block = false;
	export let type: 'button' | 'submit' = 'button';
	export let isLoading = false;
	export let disabled = false;
	export let onClick: () => void = _.noop;

	const shadowStyles =
		colorType === 'link'
			? undefined
			: `
shadow-[0_4px_9px_-4px_#3b71ca]
hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
`;
</script>

<button
	{type}
	disabled={disabled || (colorType === 'link' && isLoading)}
	on:click={onClick}
	class="{buttonTypeStyles[colorType]} {textColor[colorType]} {shadowStyles}
		inline-block relative rounded px-6 pb-2 pt-2.5 text-sm
		font-medium uppercase leading-normal
		transition duration-150 ease-in-out
		focus:outline-none focus:ring-0
		disabled:cursor-not-allowed disabled:opacity-50"
	class:w-full={block}
	{...$$restProps}>
	<slot />

	{#if isLoading && colorType !== 'link'}
		<Spinner asOverlay size="sm" color="text-neutral-200" />
	{/if}
</button>
