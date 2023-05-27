import { IProject } from '../utils/interfaces';

export default function CardDesc({ desc }: IProject) {
	return (
		<p className='px-12 mt-0'>
			{desc}
			<span className='ml-2 text-slate-500 hover:text-orange-500 underline underline-offset-2 text-sm'>
				...Read more
			</span>
		</p>
	);
}
