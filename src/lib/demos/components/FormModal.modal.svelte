<script lang="ts">
	import { Button, Heading, InputField, Modal, ModalBody, ModalFooter } from '$lib/components';

	const id = 'demoModal__form';

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
	<Button data-te-toggle="modal" data-te-target="#{id}">Launch form modal</Button>
</div>

<Modal {id} title="Modal with a Form" onShow={handleShow}>
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
			<Button colorType="secondary" disabled={isLoading} data-te-modal-dismiss>Cancel</Button>
			<Button colorType="primary" type="submit" disabled={!valid} {isLoading}>Save Changes</Button>
		</ModalFooter>
	</form>
</Modal>
