<!-- https://tailwind-elements.com/docs/standard/navigation/offcanvas -->
<script lang="ts">
	import { Button, Drawer, Heading, InputField, ModalBody, ModalFooter } from '$lib/components';

	const id = 'demoDrawer';

	const values = {
		firstName: '',
		lastName: ''
	};

	let isLoading = false;

	$: valid = Object.values(values).every(Boolean);

	function handleShow() {
		values.firstName = '';
		values.lastName = '';
	}

	async function handleSubmit() {
		isLoading = true;
		await new Promise((resolve) => {
			setTimeout(() => {
				const btn = document.getElementById(`${id}__close`);
				if (btn) {
					btn.click();
				}

				isLoading = false;
				resolve('ok');
			}, 1500);
		});
	}
</script>

<div class="mt-4">
	<Button data-te-offcanvas-toggle data-te-target="#{id}" aria-controls={id}>Open Drawer</Button>
</div>

<Drawer {id} title="Awesome Drawer Components" onShow={handleShow}>
	<form on:submit|preventDefault={handleSubmit}>
		<ModalBody>
			<Heading tag="h6">Enter some data, and do a thing!</Heading>
			<InputField
				id="firstName"
				label="First Name"
				placeholder="Enter your first name"
				disabled={isLoading}
				bind:value={values.firstName} />

			<InputField
				id="lastName"
				label="Last Name"
				placeholder="Enter your last name"
				disabled={isLoading}
				bind:value={values.lastName} />
		</ModalBody>

		<ModalFooter includeCloseButton={false}>
			<Button colorType="secondary" disabled={isLoading} data-te-offcanvas-dismiss>Cancel</Button>
			<Button colorType="primary" type="submit" disabled={!valid} {isLoading}>Save Changes</Button>
		</ModalFooter>
	</form>
</Drawer>
