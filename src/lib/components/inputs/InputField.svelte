<!-- https://tailwind-elements.com/docs/standard/forms/inputs -->
<script lang="ts">
	export let id: string;
	export let label: string;
	export let value: string;

	export let placeholder = '';
	export let readonly = false;
	export let required = false;
	export let disabled = false;
</script>

<!-- TODO: figure out how to get better styling for this -->
<div class="relative mb-3 border-zinc-300" data-te-input-wrapper-init>
	<input
		bind:value
		type="text"
		class="peer block min-h-[auto] w-full rounded border-0
			bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none
			transition-all duration-200 ease-linear focus:placeholder:opacity-100
			peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100
			dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary
			motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
		{id}
		{placeholder}
		{readonly}
		{required}
		{disabled} />

	<label
		for={id}
		class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0]
			truncate pt-[0.37rem] leading-[1.6] text-neutral-500
			transition-all duration-200 ease-out
			peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]
			peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]
			peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none
			dark:text-neutral-200 dark:peer-focus:text-primary"
		>{label}
	</label>
</div>
