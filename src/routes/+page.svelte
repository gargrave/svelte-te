<script>
	import Button from '$lib/Button.svelte';
	import Divider from '$lib/Divider.svelte';
	import Heading from '$lib/Heading.svelte';
	import UiSection from '$lib/UiSection.svelte';
</script>

<UiSection title="Heading">
	<Heading tag="h1">This is an h1 tag!</Heading>
	<Heading tag="h2">This is an h2 tag!</Heading>
	<Heading tag="h3">This is an h3 tag!</Heading>
	<Heading tag="h4">This is an h4 tag!</Heading>
	<Heading tag="h5">This is an h5 tag!</Heading>
	<Heading tag="h6">This is an h6 tag!</Heading>
</UiSection>

<UiSection title="Button">
	<Heading tag="h5">Basic button types</Heading>
	<Button btnType="primary">Primary</Button>
	<Button btnType="secondary">Secondary</Button>
	<Button btnType="success">Success</Button>
	<Button btnType="danger">Danger</Button>
	<Button btnType="warning">Warning</Button>
	<Button btnType="info">Info</Button>
	<Divider />

	<Heading tag="h5">Block buttons</Heading>
	<p>Block buttons take up the full width of the container.</p>
	<div class="mt-4 flex flex-col gap-2">
		<Button btnType="primary" block>Primary</Button>
		<Button btnType="secondary" block>Secondary</Button>
		<Button btnType="success" block>Success</Button>
		<Button btnType="danger" block>Danger</Button>
		<Button btnType="warning" block>Warning</Button>
		<Button btnType="info" block>Info</Button>
	</div>
</UiSection>
