<!-- https://tailwind-elements.com/docs/standard/components/buttons -->
<!-- https://getbootstrap.com/docs/5.3/components/buttons -->
<script lang="ts">
	import { _ } from '$lib/utils';
	import Spinner from './Spinner.svelte';
	import type { ColorType } from './components.types';

	type ButtonType = ColorType | 'utility' | 'link' | 'ghost';

	// TODO: add size styling; based on 'size' prop instead of 'type'
	const buttonTypeStyles: Record<ButtonType, string> = {
		primary: 'px-5',
		secondary: 'px-5',
		success: 'px-5',
		danger: 'px-5',
		warning: 'px-5',
		info: 'px-5',
		utility: 'px-5',
		link: 'px-3',
		ghost: 'px-3'
	};

	const bgStyles: Record<ButtonType, string> = {
		primary:
			'bg-primary focus:bg-primary-600 [&:not(:disabled)]:active:bg-primary-700 [&:not(:disabled)]:hover:bg-primary-600',
		secondary:
			'bg-secondary-200 [&:not(:disabled)]:hover:bg-secondary-400 focus:bg-secondary-400 [&:not(:disabled)]:active:bg-secondary-500',
		success:
			'bg-success [&:not(:disabled)]:hover:bg-success-600 focus:bg-success-600 [&:not(:disabled)]:active:bg-success-700',
		danger:
			'bg-danger [&:not(:disabled)]:hover:bg-danger-600 focus:bg-danger-600 [&:not(:disabled)]:active:bg-danger-700',
		warning:
			'bg-warning [&:not(:disabled)]:hover:bg-warning-600 focus:bg-warning-600 [&:not(:disabled)]:active:bg-warning-700',
		info: 'bg-info [&:not(:disabled)]:hover:bg-info-600 focus:bg-info-600 [&:not(:disabled)]:active:bg-info-700',
		utility:
			'bg-neutral-100 border-2 border-neutral-300 bg-opacity-0 [&:not(:disabled)]:hover:bg-opacity-10 [&:not(:disabled)]:focus:bg-opacity-10 [&:not(:disabled)]:active:bg-opacity-20',
		link: 'bg-transparent [&:not(:disabled)]:hover:underline',
		ghost:
			'bg-neutral-100 bg-opacity-0 [&:not(:disabled)]:hover:bg-opacity-10 [&:not(:disabled)]:active:bg-opacity-20'
	};

	const textStyles: Record<ButtonType, string> = {
		primary: 'dark:text-neutral-100',
		secondary: 'dark:text-zinc-600',
		success: 'dark:text-neutral-100',
		danger: 'dark:text-neutral-100',
		warning: 'dark:text-neutral-100',
		info: 'dark:text-neutral-100',
		utility: 'dark:text-neutral-200',
		link: 'dark:text-neutral-200',
		ghost: 'dark:text-neutral-200'
	};

	let isConfirming = false;

	export let colorType: ButtonType = 'primary';
	export let block = false;
	export let type: 'button' | 'submit' = 'button';
	export let id: string | undefined = undefined;
	export let isLoading = false;
	export let disabled = false;
	export let confirmText = '';
	export let confirmTimeout = 2500;
	export let classes = '';

	export let onClick: (event: MouseEvent) => void = _.noop;
	export let onConfirmTimeout: () => void = _.noop;

	const noShadowTypes: ButtonType[] = ['utility', 'link', 'ghost'];
	const shadowStyles = noShadowTypes.includes(colorType)
		? ''
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

	let timeout: number;
	function handleClick(event: MouseEvent) {
		event.stopPropagation();

		if (!confirmText) {
			onClick(event);
			return;
		}

		if (isConfirming) {
			clearTimeout(timeout);
			onClick(event);
			isConfirming = false;
		} else {
			isConfirming = true;
			timeout = setTimeout(() => {
				isConfirming = false;
				onConfirmTimeout();
			}, confirmTimeout);
		}
	}
</script>

<button
	{type}
	{disabled}
	{id}
	on:click={handleClick}
	class="pb-2 pt-2.5
		{buttonTypeStyles[colorType]} {bgStyles[colorType]} 
		{textStyles[colorType]} {shadowStyles}
		inline-block relative rounded
		font-medium uppercase leading-normal
		transition duration-150 ease-in-out
		focus:outline-none focus:ring-0
		disabled:cursor-not-allowed disabled:opacity-50 {classes}"
	class:w-full={block}
	{...$$restProps}
>
	{#if isConfirming}
		{confirmText}
	{:else}
		<slot />
	{/if}

	{#if isLoading && colorType !== 'link'}
		<Spinner asOverlay size="sm" color="text-neutral-200" />
	{/if}
</button>
