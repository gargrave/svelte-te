<script>
	import { Heading, InputField } from '$lib/components';
	import UiSection from './UiSection.svelte';

	const values = {
		firstName: '',
		lastName: ''
	};

	let disabled = false;
</script>

<UiSection title="InputField">
	<div slot="blurb">
		<p>Input fields to write stuff in!</p>

		<label>
			<input
				class="ml-4"
				type="checkbox"
				checked={disabled}
				on:change={() => (disabled = !disabled)} />
			Disable all inputs
		</label>
	</div>

	<div class="flex">
		<Heading classes="mb-6 mr-2" tag="h6">Value:</Heading>
		<span>{values.firstName} {values.lastName}</span>
	</div>

	<InputField
		{disabled}
		id="input-demo1"
		label="First name"
		bind:value={values.firstName}
		placeholder="Enter your first name" />

	<InputField
		{disabled}
		id="input-demo1"
		label="Last name"
		bind:value={values.lastName}
		placeholder="Enter your last name" />
</UiSection>
