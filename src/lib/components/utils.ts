/* eslint-disable @typescript-eslint/no-explicit-any */
// https://tailwind-elements.com/docs/standard/navigation/offcanvas/#api-section-methods
interface TeModal {
	hide: () => void;
	show: () => void;
	toggle: () => void;
}

const componentCache: Record<string, any> = {};

let Offcanvas: any;

function getCachedOrInstantiate<T>(id: string, ctor: new (selector: HTMLElement | null) => T) {
	if (componentCache[id]) {
		return componentCache[id];
	}

	const component = new ctor(document.getElementById(id));
	componentCache[id] = component;
	return component;
}

export const svelteTeUtils = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	init: (te: any) => {
		Offcanvas = te.Offcanvas;
	},

	getDrawer: (id: string): TeModal => getCachedOrInstantiate<typeof Offcanvas>(id, Offcanvas)
};
