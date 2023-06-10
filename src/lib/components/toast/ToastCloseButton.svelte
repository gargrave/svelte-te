<script lang="ts">
	export let onClick: () => void;
</script>

<button
	type="button"
	aria-label="Close Toast"
	on:click={onClick}
	class="box-content rounded-none border-none shrink-0 ml-auto h-10 w-10
		hover:no-underline hover:opacity-50 cursor-pointer">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		class="h-5 w-5 ml-[10px]">
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
</button>
