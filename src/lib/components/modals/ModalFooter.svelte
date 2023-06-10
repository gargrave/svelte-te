<!-- https://tailwind-elements.com/docs/standard/components/modal -->
<script lang="ts">
	import Button from '../Button.svelte';

	export let includeCloseButton = true;
	export let closeButtonText = 'Close';
</script>

<div
	class="p-4 flex flex-shrink-0 flex-wrap items-center justify-end gap-2 rounded-b-md
		border-t-2 border-neutral-100 border-opacity-100 dark:border-opacity-50">
	{#if includeCloseButton}
		<Button colorType={'secondary'} data-te-modal-dismiss>{closeButtonText}</Button>
	{/if}
	<slot />
</div>
