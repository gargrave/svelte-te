import type { ColorType } from './components.types';
import type { IconType } from './svg/IconMap';

export const textAndBgByColorType: Record<ColorType, string> = {
	primary: 'bg-primary-100 text-primary-600',
	secondary: 'bg-secondary-200 text-secondary-800',
	success: 'bg-success-100 text-success-700',
	danger: 'bg-danger-100 text-danger-700',
	warning: 'bg-warning-100 text-warning-800',
	info: 'bg-info-100 text-info-800'
};

export const iconsByType: Record<ColorType, IconType> = {
	primary: 'InfoCircle',
	secondary: 'InfoCircle',
	success: 'CheckCircle',
	danger: 'XCircle',
	warning: 'ExclamationTriangle',
	info: 'InfoCircle'
};
