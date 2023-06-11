<!-- https://tailwind-elements.com/docs/standard/components/modal -->
<script lang="ts">
	import { onMount } from 'svelte';

	import Heading from '../typography/Heading.svelte';
	import ModalCloseButton from './ModalCloseButton.svelte';

	const EVENT_SHOW = 'show.te.modal';
	const EVENT_SHOWN = 'shown.te.modal';
	const EVENT_HIDE = 'hide.te.modal';
	const EVENT_HIDDEN = 'hidden.te.modal';
	//test

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
	aria-hidden="true"
	data-te-modal-init
	class="fixed left-0 top-0 z-[1055] hidden h-full w-full
		overflow-y-auto overflow-x-hidden outline-none">
	<div
		data-te-modal-dialog-ref
		class="_modal pointer-events-none relative w-auto mx-auto opacity-0
			transition-all duration-300 ease-in-out translate-y-[-50px]"
		style:max-width="{maxWidth}px">
		<div
			class="pointer-events-auto relative flex w-full flex-col rounded-md
				border-none bg-white bg-clip-padding text-current shadow-lg outline-none
				top-1/2 min-[576px]:translate-y-[-75%] max-[576px]:translate-y-[-50%]
				dark:bg-zinc-700 min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)]">
			<!-- ModalHeader -->
			<div
				class="p-4 flex flex-shrink-0 items-center justify-between rounded-t-md
					border-b-2 border-neutral-100 border-opacity-100 dark:border-opacity-50">
				<!--Modal title-->
				<Heading tag="h5" classes="text-xl font-medium leading-normal !mb-0" id={label}>
					{title}
				</Heading>
				<ModalCloseButton {id} parentType="modal" />
			</div>
			<slot />
		</div>
	</div>
</div>

<style>
	._modal {
		height: 100%;

		@media (max-width: 576px) {
			max-width: calc(100vw - 12px * 2) !important;
		}
	}
</style>
