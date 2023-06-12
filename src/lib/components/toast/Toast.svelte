<script lang="ts">
	import type { ColorType } from '../components.types';
	import { iconsByType, textAndBgByColorType } from '../components.utils';
	import Icon from '../Icon.svelte';
	import { toastsStore, type ToastConfig } from './toast.store';
	import ToastCloseButton from './ToastCloseButton.svelte';

	export const borderByColorType: Record<ColorType, string> = {
		primary: 'border-primary-600',
		secondary: 'bg-secondary-200',
		success: 'border-success-100',
		danger: 'bg-danger-100',
		warning: 'bg-warning-100',
		info: 'bg-info-200'
	};

	export let toast: ToastConfig;
</script>

<!-- data-te-toast-dismiss -->
<div
	class="p-2 pr-0 w-full min-w-[256px] flex items-center justify-between gap-2
		shadow pointer-events-auto {textAndBgByColorType[toast.type]}
		rounded border {borderByColorType[toast.type]}"
	role="alert"
	aria-live="assertive"
	aria-atomic="true">
	<Icon classes="shrink-0" icon={iconsByType[toast.type]} size={26} />
	<div>{toast.message}</div>
	<ToastCloseButton onClick={() => toastsStore.remove(toast.id)} />
</div>
