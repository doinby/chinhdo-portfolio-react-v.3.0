import { IProject } from '../utils/interfaces';
import { getStackColour } from '../utils/utilsFunctions';

export default function CardSubtitle({ title, stacks, lastUpdated }: IProject) {
	return (
		<div className='flex justify-between items-baseline px-12'>
			<div className='flex items-baseline gap-4'>
				{stacks instanceof Array &&
					stacks.map((stack: string, idx: number) => {
						return (
							<p
								key={`${title}-${idx}`}
								className={`${getStackColour(
									stack.toLowerCase()
								)} font-header text-sm`}>
								{stack}
							</p>
						);
					})}
			</div>
			<p className='text-slate-400 text-sm'>Updated: {lastUpdated?.toString()}</p>
		</div>
	);
}
