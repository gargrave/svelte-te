<script>
	import { Divider } from '$lib/components';
	import { UiSection } from '$lib/demos';
	import { FormModal, SimpleConfirmModal } from './components';
</script>

<UiSection title="Modal">
	<div slot="blurb">
		<p>Based on the core TE Modal, but with some responsiveness modifications to fit my tastes.</p>
	</div>

	<p>This shows a modal with some basic text and a simple "close" button. No interactivity.</p>
	<SimpleConfirmModal />
	<Divider />

	<p>This shows a modal with a form, loading state, and all that good stuff.</p>
	<FormModal />
</UiSection>
