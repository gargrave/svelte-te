<script>
	import { nanoid } from 'nanoid';
	import { cubicOut as easing } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	import { toastsStore } from './toast.store';
	import Toast from './Toast.svelte';

	const DEFAULT_DURATION = 99000;
	const TRANSITION_DURATION = 350;

	$: {
		$toastsStore._queue.forEach((config) => {
			const id = nanoid();
			toastsStore._add({ id, ...config });
			setTimeout(() => {
				toastsStore.remove(id);
			}, DEFAULT_DURATION);
		});

		toastsStore._clearQueue();
	}
</script>

<div
	class="_toast-container p-3 fixed bottom-0 right-0 flex flex-col gap-2
		pointer-events-none w-full z-[1090]
		min-[576px]:p-6">
	{#each $toastsStore.toasts as toast (toast.id)}
		<div transition:scale={{ duration: TRANSITION_DURATION, easing }}>
			<Toast {toast} />
		</div>
	{/each}
</div>

<style>
	._toast-container {
		@media (min-width: 576px) {
			max-width: 400px;
		}
	}
</style>
