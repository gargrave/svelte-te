<div class="_modal-body relative flex-auto p-4" data-te-modal-body-ref>
	<slot />
</div>

<style>
	:root {
		--header-height: 64px;
		--touch-buffer: 40px;
	}

	._modal-body {
		max-height: calc(100vh - var(--header-height) - (var(--touch-buffer) * 2));
		overflow-y: auto;
	}
</style>
