<!-- https://tailwind-elements.com/docs/standard/components/alerts -->
<!-- https://getbootstrap.com/docs/5.3/components/alerts -->
<script lang="ts">
	import Icon from './Icon.svelte';

	import type { ColorType } from './components.types';
	import { iconsByType, textAndBgByColorType } from './components.utils';
	import type { IconType } from './svg/IconMap';

	export let colorType: ColorType = 'primary';
	export let hideIcon = false;
	export let customIcon: IconType | undefined = undefined;
	// TODO: add a 'dismissable' prop
</script>

<div
	class="mb-4 px-5 py-4 flex items-center justify-start gap-2
		rounded-lg {textAndBgByColorType[colorType]}"
	role="alert">
	{#if !hideIcon}
		<Icon classes="shrink-0" icon={customIcon || iconsByType[colorType]} size={26} />
	{/if}
	<div class="pt-0.5">
		<slot />
	</div>
</div>
