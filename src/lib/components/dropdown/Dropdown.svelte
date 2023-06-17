<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import Button from '../Button.svelte';
	import Caret from './Caret.svelte';
	import type { DropdownMenuItem } from './dropdown.types';

	type DropdownPosition = 'left' | 'right';
	const pos: Record<DropdownPosition, string> = {
		left: 'dropstart',
		right: 'dropend'
	};

	export let id: string;
	export let menuItems: DropdownMenuItem[];
	export let position: DropdownPosition | undefined = undefined;
	export let hideCaret = false;

	// button/trigger config
	export let buttonType: ComponentProps<Button>['colorType'] = 'primary';
</script>

<div
	class="relative"
	data-te-dropdown-ref
	data-te-dropdown-position={position ? pos[position] : undefined}>
	<Button
		{id}
		colorType={buttonType}
		classes="flex-center"
		aria-expanded="false"
		data-te-dropdown-toggle-ref>
		<slot />
		{#if !hideCaret}<Caret />{/if}
	</Button>

	<div
		class="p-1 m-0 absolute z-[1000] float-left hidden min-w-max list-none flex-col items-start
			overflow-hidden rounded-lg text-left text-base shadow-lg
			bg-white bg-clip-padding
			border border-zinc-900
			dark:bg-neutral-800 dark:text-neutral-200
			[&[data-te-dropdown-show]]:flex"
		aria-labelledby={id}
		data-te-dropdown-menu-ref>
		{#each menuItems as item (item.text)}
			<Button
				classes="!px-4 normal-case font-normal"
				colorType="link"
				onClick={item.action}
				data-te-dropdown-item-ref>
				{item.text}
			</Button>
		{/each}
	</div>
</div>
