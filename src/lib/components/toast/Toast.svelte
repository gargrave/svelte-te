<script lang="ts">
	import type { ColorType } from '../components.types';
	import { iconsByType, textAndBgByColorType } from '../components.utils';
	import Icon from '../Icon.svelte';
	import type { ToastConfig } from './toast.store';

	export const borderByColorType: Record<ColorType, string> = {
		primary: 'border-primary-600',
		secondary: 'bg-secondary-200',
		success: 'border-success-100',
		danger: 'bg-danger-100',
		warning: 'bg-warning-100',
		info: 'bg-info-100'
	};

	export let toast: ToastConfig;
</script>

<div
	class="p-2 w-full min-w-[256px] flex items-center gap-2
		{textAndBgByColorType[toast.type]} rounded border {borderByColorType[toast.type]} shadow"
	role="alert"
	aria-live="assertive"
	aria-atomic="true">
	<Icon classes="shrink-0 self-start" icon={iconsByType[toast.type]} size={26} />
	<div>{toast.message}</div>
	<!-- TODO: add a 'close' button here -->
</div>
