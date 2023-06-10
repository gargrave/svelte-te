<script>
	import { Button, Modal, ModalBody, ModalFooter } from '$lib/components';
	import Heading from '$lib/components/Heading.svelte';

	const id = 'demoModal__basic';
</script>

<div class="mt-4">
	<Button data-te-toggle="modal" data-te-target="#{id}">Launch simple modal</Button>
</div>

<Modal {id} title="Awesome Demo Modal">
	<ModalBody>
		<Heading tag="h6">Awesome, this is a modal. This is the "body" slot of the Modal!</Heading>
		<p>
			Morbi tincidunt ornare massa eget. Egestas dui id ornare arcu odio ut sem nulla. Id diam
			maecenas ultricies mi eget mauris pharetra. Augue neque gravida in fermentum. Phasellus
			egestas tellus rutrum tellus pellentesque. Tellus pellentesque eu tincidunt tortor aliquam
			nulla. Et leo duis ut diam quam nulla porttitor massa id. Facilisis magna etiam tempor orci eu
			lobortis elementum nibh tellus.
		</p>
		<p>
			Pretium nibh ipsum consequat nisl vel pretium lectus quam. Arcu non sodales neque sodales ut.
			Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris commodo quis
			imperdiet massa tincidunt.
		</p>
		<p>
			In tellus integer feugiat scelerisque varius morbi enim nunc. Purus sit amet volutpat
			consequat mauris nunc congue. Praesent tristique magna sit amet purus. Sed elementum tempus
			egestas sed sed. Morbi non arcu risus quis varius quam quisque id. Hac habitasse platea
			dictumst quisque sagittis purus sit amet volutpat. Venenatis lectus magna fringilla urna. Nibh
			venenatis cras sed felis eget. Pretium aenean pharetra magna ac.
		</p>
	</ModalBody>
	<ModalFooter />
</Modal>

<style>
	p + p {
		margin-top: 1rem;
	}
</style>
