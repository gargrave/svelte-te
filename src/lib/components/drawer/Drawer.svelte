<!-- https://tailwind-elements.com/docs/standard/navigation/offcanvas -->
<script lang="ts">
	import { onMount } from 'svelte';

	import Heading from '../Heading.svelte';
	import ModalCloseButton from '../modal/ModalCloseButton.svelte';

	const EVENT_SHOW = 'show.te.offcanvas';
	const EVENT_SHOWN = 'shown.te.offcanvas';
	const EVENT_HIDE = 'hide.te.offcanvas';
	const EVENT_HIDDEN = 'hidden.te.offcanvas';

	onMount(async () => {
		if (ref) {
			if (onShow) {
				ref.addEventListener(EVENT_SHOW, onShow);
			}
			if (onShown) {
				ref.addEventListener(EVENT_SHOWN, onShown);
			}
			if (onHide) {
				ref.addEventListener(EVENT_HIDE, onHide);
			}
			if (onHidden) {
				ref.addEventListener(EVENT_HIDDEN, onHidden);
			}
		}

		return () => {
			if (onShow) {
				ref.removeEventListener(EVENT_SHOW, onShow);
			}
			if (onShown) {
				ref.removeEventListener(EVENT_SHOWN, onShown);
			}
			if (onHide) {
				ref.removeEventListener(EVENT_HIDE, onHide);
			}
			if (onHidden) {
				ref.removeEventListener(EVENT_HIDDEN, onHidden);
			}
		};
	});

	let ref: HTMLDivElement;

	export let id: string;
	export let title: string;
	export let maxWidth = 512;

	export let onShow: (() => void) | undefined = undefined;
	export let onShown: (() => void) | undefined = undefined;
	export let onHide: (() => void) | undefined = undefined;
	export let onHidden: (() => void) | undefined = undefined;

	$: label = `${id}Label`;
</script>

<div
	{id}
	bind:this={ref}
	tabindex="-1"
	aria-labelledby={label}
	data-te-offcanvas-init
	class="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96
		max-w-full -translate-x-full flex-col border-none
		bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none
		transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200
		[&[data-te-offcanvas-show]]:transform-none"
	style:max-width="{maxWidth}px">
	<div class="flex items-center justify-between p-4">
		<Heading tag="h5" classes="text-xl font-medium leading-normal !mb-0" id={label}>
			{title}
		</Heading>
		<ModalCloseButton {id} parentType="drawer" />
	</div>
	<slot />
</div>
