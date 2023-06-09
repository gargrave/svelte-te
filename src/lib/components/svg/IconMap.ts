import type { ComponentType } from 'svelte';

import CheckCircle from './CheckCircle.svelte';
import ExcalamationCircle from './ExclamationCircle.svelte';
import ExclamationTriangle from './ExclamationTriangle.svelte';
import InfoCircle from './InfoCircle.svelte';
import XCircle from './XCircle.svelte';

export type IconType =
	| 'CheckCircle'
	| 'ExclamationCircle'
	| 'ExclamationTriangle'
	| 'InfoCircle'
	| 'XCircle';

export const iconMap: Record<IconType, ComponentType> = {
	CheckCircle: CheckCircle,
	ExclamationCircle: ExcalamationCircle,
	ExclamationTriangle: ExclamationTriangle,
	InfoCircle: InfoCircle,
	XCircle: XCircle
};
