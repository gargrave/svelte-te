<script lang="ts">
	export let id: string;
	export let parentType: 'modal' | 'drawer';
</script>

<button
	id="{id}__close"
	type="button"
	class="box-content rounded-none border-none
		hover:no-underline hover:opacity-75"
	data-te-modal-dismiss={parentType === 'modal' ? 'true' : null}
	data-te-offcanvas-dismiss={parentType === 'drawer' ? 'true' : null}
	aria-label="Close">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="h-6 w-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
</button>
