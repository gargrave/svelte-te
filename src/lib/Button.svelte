<script lang="ts">
	// https://tailwind-elements.com/docs/standard/components/buttons/
	// TODO: re-use this type def
	type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';

	// primary: '',
	// secondary: '',
	// success: '',
	// danger: '',
	// warning: '',
	// info: '',

	const buttonTypeStyles: Record<ButtonType, string> = {
		primary: 'bg-primary hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700',
		secondary:
			'bg-secondary-200 hover:bg-secondary-400 focus:bg-secondary-400 active:bg-secondary-500',
		success: 'bg-success hover:bg-success-600  focus:bg-success-600 active:bg-success-700',
		danger: 'bg-danger hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-700',
		warning: 'bg-warning hover:bg-warning-600 focus:bg-warning-600 active:bg-warning-700',
		info: 'bg-info hover:bg-info-600 focus:bg-info-600 active:bg-info-700'
	};

	const textColor: Record<ButtonType, string> = {
		primary: 'text-white',
		secondary: 'text-primary-700',
		success: 'text-white',
		danger: 'text-white',
		warning: 'text-white',
		info: 'text-white'
	};

	export let btnType: ButtonType = 'primary';
	export let block = false;
</script>

<!-- TODO: 'link' type button -->
<!-- TODO: 'outline' type button -->
<!-- TODO: disabled state + styling -->
<!-- TODO: buttons with loaders -->

<button
	type="button"
	class="{buttonTypeStyles[btnType]} {textColor[btnType]}
		inline-block rounded px-6 pb-2 pt-2.5 text-sm
		font-medium uppercase leading-normal
		transition duration-150 ease-in-out
		focus:outline-none focus:ring-0
		shadow-[0_4px_9px_-4px_#3b71ca]
		hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
		focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
		active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
		dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]
		dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
		dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
		dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
	class:w-full={block}
>
	<slot />
</button>
