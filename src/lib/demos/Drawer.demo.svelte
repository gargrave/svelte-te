<script>
	import { UiSection } from '$lib/demos';
	import SimpleDrawer from './components/SimpleDrawer.drawer.svelte';
</script>

<UiSection title="Drawer">
	<div slot="blurb">
		<p>It's like a Modal, but anchored to a side!</p>
	</div>

	<p>This shows a drawer with a form, loading state, and all that good stuff.</p>
	<SimpleDrawer />
</UiSection>
