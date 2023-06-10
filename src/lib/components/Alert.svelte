<!-- https://tailwind-elements.com/docs/standard/components/alerts -->
<!-- https://getbootstrap.com/docs/5.3/components/alerts -->
<script lang="ts">
	import Icon from './Icon.svelte';

	import type { ColorType } from './components.types';
	import type { IconType } from './svg/IconMap';

	const iconsByType: Record<ColorType, IconType> = {
		primary: 'InfoCircle',
		secondary: 'InfoCircle',
		success: 'CheckCircle',
		danger: 'XCircle',
		warning: 'ExclamationTriangle',
		info: 'InfoCircle'
	};

	const colorTypeStyles: Record<ColorType, string> = {
		primary: 'bg-primary-100 text-primary-600',
		secondary: 'bg-secondary-200 text-secondary-800',
		success: 'bg-success-100 text-success-700',
		danger: 'bg-danger-100 text-danger-700',
		warning: 'bg-warning-100 text-warning-800',
		info: 'bg-info-100 text-info-800'
	};

	export let colorType: ColorType = 'primary';
	export let hideIcon = false;
	export let customIcon: IconType | undefined = undefined;
	// TODO: add a 'dismissable' prop
</script>

<div
	class="mb-4 px-5 py-4 flex items-center justify-start gap-2
		rounded-lg {colorTypeStyles[colorType]}"
	role="alert">
	{#if !hideIcon}<Icon icon={customIcon || iconsByType[colorType]} size={26} />{/if}
	<div class="pt-0.5">
		<slot />
	</div>
</div>
