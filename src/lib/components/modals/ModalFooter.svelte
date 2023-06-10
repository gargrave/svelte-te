<!-- https://tailwind-elements.com/docs/standard/components/modal -->
<script lang="ts">
	import Button from '../Button.svelte';

	export let standardCloseButton = false;
</script>

<div
	class="p-4 flex flex-shrink-0 flex-wrap items-center justify-end gap-2 rounded-b-md
		border-t-2 border-neutral-100 border-opacity-100 dark:border-opacity-50">
	{#if standardCloseButton}
		<Button colorType={'secondary'} data-te-modal-dismiss>Close</Button>
	{/if}
	<slot />
</div>
