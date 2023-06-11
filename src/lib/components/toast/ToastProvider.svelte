<script>
	import { nanoid } from 'nanoid';
	import { fade, fly, slide } from 'svelte/transition';

	import { toastsStore } from './toast.store';
	import Toast from './Toast.svelte';

	const DEFAULT_DURATION = 4500;

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
	class="p-6 fixed bottom-0 right-0 flex flex-col gap-2
		pointer-events-none width: max-content; max-w-full z-[1090]">
	{#each $toastsStore.toasts as toast}
		<!-- TODO: figure out the transition situation -->
		<!-- <div transition:slide|local={{ duration: 500, axis: 'x' }}> -->
		<div>
			<Toast {toast} />
		</div>
	{/each}
</div>
