import { browser } from '$app/environment';
import { produce } from 'immer';
import { writable } from 'svelte/store';

import type { ColorType } from '../components.types';

export interface ToastConfig {
	id: string;
	message: string;
	type: ColorType;
}

interface ToastStore {
	_queue: Omit<ToastConfig, 'id'>[];
	toasts: ToastConfig[];
}

const initialState = Object.freeze<ToastStore>({
	_queue: [],
	toasts: []
});

function createStore() {
	const { subscribe, update } = writable<ToastStore>(initialState);

	return {
		_add: (toast: ToastConfig) =>
			update((prev) =>
				produce(prev, (draft) => {
					draft.toasts.push(toast);
				})
			),

		_clearQueue: () =>
			update((prev) =>
				produce(prev, (draft) => {
					draft._queue = [];
				})
			),

		enqueue: (config: Omit<ToastConfig, 'id'>) =>
			update((prev) =>
				produce(prev, (draft) => {
					draft._queue.push({
						...config,
						type: config.type || 'success'
					});
				})
			),

		remove: (id: string) =>
			update((prev) =>
				produce(prev, (draft) => {
					draft.toasts = prev.toasts.filter((t) => t.id !== id);
				})
			),

		subscribe,
		update
	};
}

export const toastsStore = createStore();
if (browser) {
	toastsStore.subscribe((s) => {
		console.log('=== TOAST STORE ===');
		console.log(JSON.parse(JSON.stringify(s)));
	});
}
