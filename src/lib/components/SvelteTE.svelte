<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Offcanvas, Modal, Toast, initTE } = await import('tw-elements');
		initTE({ Offcanvas, Modal, Toast });
	});
</script>
