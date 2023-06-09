<script lang="ts">
	const textSizes = {
		h1: 'text-5xl font-extrabold',
		h2: 'text-4xl font-bold',
		h3: 'text-3xl font-bold',
		h4: 'text-2xl font-medium',
		h5: 'text-xl font-medium',
		h6: 'text-base font-medium'
	};

	export let color = 'text-gray-800 dark:text-gray-100';
	export let classes = '';
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
</script>

<svelte:element this={tag} class="mb-2 mt-0 {color} {textSizes[tag]}{classes ? ` ${classes}` : ''}">
	<slot />
</svelte:element>
