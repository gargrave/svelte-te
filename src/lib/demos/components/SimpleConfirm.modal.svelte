<script>
	import { Button, Modal } from '$lib/components';

	const id = 'demoModal1';
</script>

<Button data-te-toggle="modal" data-te-target="#{id}">Show modal</Button>

<Modal {id} title="Awesome Demo Modal">
	<div slot="body">
		<p>Awesome, this is a modal. This is the "body" slot of the Modal!</p>
		<p>
			Morbi tincidunt ornare massa eget. Egestas dui id ornare arcu odio ut sem nulla. Id diam
			maecenas ultricies mi eget mauris pharetra. Augue neque gravida in fermentum. Phasellus
			egestas tellus rutrum tellus pellentesque. Tellus pellentesque eu tincidunt tortor aliquam
			nulla. Et leo duis ut diam quam nulla porttitor massa id. Facilisis magna etiam tempor orci eu
			lobortis elementum nibh tellus.
		</p>
		<p>
			Morbi tincidunt ornare massa eget. Egestas dui id ornare arcu odio ut sem nulla. Id diam
			maecenas ultricies mi eget mauris pharetra. Augue neque gravida in fermentum. Phasellus
			egestas tellus rutrum tellus pellentesque. Tellus pellentesque eu tincidunt tortor aliquam
			nulla. Et leo duis ut diam quam nulla porttitor massa id. Facilisis magna etiam tempor orci eu
			lobortis elementum nibh tellus.
		</p>
		<p>
			Morbi tincidunt ornare massa eget. Egestas dui id ornare arcu odio ut sem nulla. Id diam
			maecenas ultricies mi eget mauris pharetra. Augue neque gravida in fermentum. Phasellus
			egestas tellus rutrum tellus pellentesque. Tellus pellentesque eu tincidunt tortor aliquam
			nulla. Et leo duis ut diam quam nulla porttitor massa id. Facilisis magna etiam tempor orci eu
			lobortis elementum nibh tellus.
		</p>
	</div>
</Modal>
