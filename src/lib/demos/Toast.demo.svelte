<script lang="ts">
	import { Button, toastsStore, type ColorType } from '$lib/components';
	import { UiSection } from '$lib/demos';
	import { colorTypes } from './demos.helpers';

	const handleClick = (type: ColorType) => () => {
		toastsStore.enqueue({
			message: `This is a ${type} toast! ${Date.now()}`,
			type
		});
	};
</script>

<UiSection title="Toast">
	<div slot="blurb">
		<p>Yummy toasts, to give temporary non-invasive notifications.</p>
	</div>

	<div class="flex flex-wrap gap-2">
		{#each colorTypes as colorType}
			<Button {colorType} onClick={handleClick(colorType)}>Show {colorType} Toast</Button>
		{/each}
	</div>
</UiSection>
