<script lang="ts">
	export let id: string;
	export let label: string;
	export let value: number;

	export let min = 0;
	export let max = 9999;
	export let step = 1;
	export let classes = '';
	export let labelClass = '';
</script>

<div>
	<label for={id} class="mb-2 inline-block {labelClass}">
		{label}
	</label>

	<input
		type="range"
		class="transparent h-1.5 w-full cursor-pointer appearance-none
			rounded-lg border-transparent bg-neutral-200 {classes}"
		name={id}
		bind:value
		{id}
		{min}
		{max}
		{step} />
</div>
