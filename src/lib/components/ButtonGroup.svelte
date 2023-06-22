<div class="button-group flex"><slot /></div>

<style>
	:global(.button-group > button) {
		margin: 0;
	}

	:global(.button-group > button:not(:last-child)) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}

	:global(.button-group > button:not(:first-child)) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-left-width: 0;
	}
</style>
