<!-- https://tailwind-elements.com/docs/standard/forms/inputs -->
<script lang="ts">
	import Label from './Label.svelte';

	export let id: string;
	export let label: string;
	export let value: string;

	export let placeholder = '';
	export let readonly = false;
	export let required = false;
	export let disabled = false;
</script>

<div class="relative mb-4">
	<Label {id} {label} />
	<input
		bind:value
		type="text"
		class="py-1.5 px-3 block relative appearance-none rounded-md
			bg-neutral-300 dark:bg-zinc-600
			w-full border-0 outline-none
			text-base leading-normal font-normal bg-clip-padding
			transition-all duration-175 ease-in-out motion-reduce:transition-none
			focus:outline-neutral-300 focus:outline-2
			focus:outline-none focus:placeholder:opacity-60
			disabled:cursor-not-allowed disabled:opacity-50"
		{id}
		name={id}
		{placeholder}
		{readonly}
		{required}
		{disabled} />
</div>
