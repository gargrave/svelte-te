<script lang="ts">
	export let href: string;
	export let classes = '';
	export let isExternal = false;
</script>

<a
	{href}
	class="underline transition duration-150 ease-in-out
		decoration-transparent hover:decoration-inherit {classes}"
	target={isExternal ? '_blank' : undefined}
	rel={isExternal ? 'noopener noreferrer' : undefined}
>
	<slot /></a
>
