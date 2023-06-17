<!-- https://tailwind-elements.com/docs/standard/forms/inputs -->
<script lang="ts">
	export let id: string;
	export let label: string;
</script>

<label for={id} class="mb-1.5 pl-[2px] inline-block">{label}</label>
