<script lang="ts">
	import { Button, Divider, toastsStore, type ColorType } from '$lib/components';
	import { UiSection } from '$lib/demos';
	import { FormModal, SimpleConfirmModal } from './components';

	const handleClick = (type: ColorType) => () => {
		toastsStore.enqueue({
			message: `This is a ${type} toast! ${Date.now()}`,
			type
		});
	};
</script>

<UiSection title="Toast">
	<div slot="blurb">
		<p>Yummy toasts, to give temporary non-invasive notifications.</p>
	</div>

	<Button onClick={handleClick('success')}>Show Success Toast</Button>
	<Button onClick={handleClick('danger')}>Show Danger Toast</Button>
</UiSection>
