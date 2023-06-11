<script>
	import { Link } from '$lib/components';
	import { UiSection } from '$lib/demos';
	import SimpleDrawer from './components/SimpleDrawer.drawer.svelte';
</script>

<UiSection title="Drawer">
	<div slot="blurb">
		<p>It's like a Modal, but anchored to a side!</p>
		<p class="mt-4">A few details:</p>
		<ul class="list-disc ml-6">
			<li>
				Based on the <Link
					isExternal
					href="https://tailwind-elements.com/docs/standard/navigation/offcanvas"
					classes="font-bold">
					TE Offcanvas
				</Link> component, with some tweaks to taste.
			</li>
			<li>
				On mobile sizes, it will be sized exactly 44px smaller than screen width, in order to leave
				room for clicking the backdrop to close.
			</li>
		</ul>
	</div>

	<p>This shows a drawer with a form, loading state, and all that good stuff.</p>
	<SimpleDrawer position="right" />
	<SimpleDrawer position="left" />
</UiSection>
