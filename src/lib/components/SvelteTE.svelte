<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Offcanvas, Modal, initTE } = await import('tw-elements');
		initTE({ Offcanvas, Modal });
	});
</script>
