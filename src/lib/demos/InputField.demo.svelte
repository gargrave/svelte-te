<script>
	import { Heading, InputField } from '$lib/components';
	import UiSection from './UiSection.svelte';

	const values = {
		firstName: '',
		lastName: ''
	};
</script>

<UiSection title="InputField">
	<div slot="blurb">
		<p>Input fields to write stuff in!</p>
	</div>

	<div class="flex">
		<Heading classes="mb-6 mr-2" tag="h6">Value:</Heading>
		<span>{values.firstName} {values.lastName}</span>
	</div>

	<InputField
		id="input-demo1"
		label="First name"
		bind:value={values.firstName}
		placeholder="Enter your first name" />

	<InputField
		id="input-demo1"
		label="Last name"
		bind:value={values.lastName}
		placeholder="Enter your last name" />
</UiSection>
