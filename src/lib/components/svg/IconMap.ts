import type { ComponentType } from 'svelte';

import Bars3 from './Bars3.svelte';
import CheckCircle from './CheckCircle.svelte';
import ExcalamationCircle from './ExclamationCircle.svelte';
import ExclamationTriangle from './ExclamationTriangle.svelte';
import Folder from './Folder.svelte';
import InfoCircle from './InfoCircle.svelte';
import PlusCircle from './PlusCircle.svelte';
import Trash from './Trash.svelte';
import XCircle from './XCircle.svelte';
import XMark from './XMark.svelte';

export type IconType =
	| 'Bars3'
	| 'CheckCircle'
	| 'ExclamationCircle'
	| 'ExclamationTriangle'
	| 'Folder'
	| 'InfoCircle'
	| 'PlusCircle'
	| 'Trash'
	| 'XCircle'
	| 'XMark';

export const iconMap: Record<IconType, ComponentType> = {
	Bars3: Bars3,
	CheckCircle: CheckCircle,
	ExclamationCircle: ExcalamationCircle,
	ExclamationTriangle: ExclamationTriangle,
	Folder: Folder,
	InfoCircle: InfoCircle,
	PlusCircle: PlusCircle,
	Trash: Trash,
	XCircle: XCircle,
	XMark: XMark
};
