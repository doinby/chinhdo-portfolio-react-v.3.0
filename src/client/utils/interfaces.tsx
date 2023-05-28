import { Props } from '@headlessui/react/dist/types';
import React from 'react';

export interface IProject {
	_id?: string;
	coverImg?: string;
	desc?: string;
	github?: string;
	lastUpdated?: Date;
	live?: string;
	stacks?: [];
	screenshots?: [];
	title?: string;
	content?: string;
}

export interface ICardCoverImgProps extends IProject {
	isOpen: boolean;
	setOpen: () => {};
}

export interface IDefaultProps {
	children?: React.ReactNode;
	className?: string;
}

export interface ILinkBtn extends IDefaultProps {
	url?: string;
	target?: '_blank';
	onClick?: () => {};
}

export interface IContentModalProps extends IProject {
	isOpen: boolean;
	setOpen: ({}) => void;
}
