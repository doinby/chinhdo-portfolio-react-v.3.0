import { ILinkBtn } from './interfaces';

export function LinkBtn({
	children,
	url,
	className,
	target,
	onClick,
}: ILinkBtn) {
	return (
		<a
			aria-disabled
			href={url || ''}
			target={target}
			className={`${className} px-4 py-2 rounded-md no-underline bg-slate-500 text-white hover:bg-orange-500 hover:text-white`}>
			{children}
		</a>
	);
}
