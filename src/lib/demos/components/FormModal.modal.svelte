<script lang="ts">
	import { onMount } from 'svelte';

	import { Button, Modal, ModalBody, ModalFooter, type TeModal } from '$lib/components';
	import Heading from '$lib/components/Heading.svelte';
	import InputField from '$lib/components/inputs/InputField.svelte';

	const id = 'demoModal__form';
	let modalRef: TeModal;
	let isLoading = false;

	const values = {
		firstName: '',
		lastName: ''
	};

	async function handleSubmit() {
		isLoading = true;
		await new Promise((resolve) => {
			setTimeout(() => {
				isLoading = false;
				modalRef.hide();
				resolve('ok');
			}, 1500);
		});
	}

	function handleModalShow() {
		values.firstName = '';
		values.lastName = '';
	}

	onMount(async () => {
		const { Modal } = await import('tw-elements');
		const modalEl = document.getElementById(id);

		if (modalEl) {
			modalRef = new Modal(modalEl);
			modalEl.addEventListener('show.te.modal', handleModalShow);
		}

		return () => {
			console.log(`CLEAR MODAL`);
			if (modalEl) {
				modalEl.removeEventListener('show.te.modal', handleModalShow);
			}
		};
	});

	$: valid = Object.values(values).every(Boolean);
</script>

<div class="mt-4">
	<Button data-te-toggle="modal" data-te-target="#{id}">Launch form modal</Button>
</div>

<Modal {id} title="Modal with a Form">
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
