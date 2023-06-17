<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Dropdown, Offcanvas, Modal, initTE } = await import('tw-elements');
		initTE({ Dropdown, Offcanvas, Modal });
	});
</script>
