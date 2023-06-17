<script lang="ts">
	import { Dropdown, Icon, type DropdownMenuItem } from '$lib/components';
	import UiSection from './UiSection.svelte';

	const demoItems1: DropdownMenuItem[] = [
		{
			action: () => console.log('Cool'),
			text: "Log 'Cool'"
		},
		{
			action: () => console.log('Awesome'),
			text: "Log 'Awesome'"
		},
		{
			action: () => console.log('Excellent'),
			text: "Log 'Excellent'"
		}
	];
</script>

<UiSection title="Dropdown">
	<div slot="blurb">
		<p>Dropdown menu buttons</p>
	</div>

	<p>This shows a few different configurations and menu positions.</p>
	<div class="mt-4 flex flex-wrap gap-2">
		<Dropdown id="DropdownDemo1" menuItems={demoItems1}>Default Dropdown</Dropdown>
		<Dropdown id="DropdownDemo2" buttonType="secondary" menuItems={demoItems1} position="right">
			Right
		</Dropdown>
		<Dropdown id="DropdownDemo2" buttonType="success" menuItems={demoItems1} position="left">
			Left
		</Dropdown>
		<Dropdown
			id="DropdownDemo2"
			buttonType="ghost"
			hideCaret={true}
			menuItems={demoItems1}
			position="left">
			<Icon icon="Bars3" size={24} />
		</Dropdown>
	</div>
</UiSection>
