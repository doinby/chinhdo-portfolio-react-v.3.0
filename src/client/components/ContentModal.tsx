import { Dialog } from '@headlessui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { Close } from 'styled-icons/remix-line';
import { IContentModalProps } from '../utils/interfaces';

export default ({
	isOpen,
	setOpen,
	title,
	content,
	screenshots,
	live,
	github,
}: IContentModalProps) => {
	return (
		<Dialog
			as='div'
			open={isOpen}
			onClose={() => setOpen(false)}
			className='relative z-10'>
			<div className='fixed inset-0 flex items-center justify-center ml-32'>
				<Dialog.Panel className='relative w-screen h-screen px-20 py-24 bg-orange-50 rounded-tl-md rounded-bl-md overflow-y-scroll'>
					<Dialog.Title as='h2' className='mb-6 text-3xl text-orange-500'>
						{title}
					</Dialog.Title>
					<Dialog.Description
						as='article'
						className='flex flex-wrap sm:flex-nowrap items-start gap-16'>
						<div className='prose'>
							<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
						</div>
						<aside className='prose w-[40%]'>
							<div className='grid grid-cols-2 gap-6'>
								{Array.isArray(screenshots) &&
									screenshots.map((url, idx) => (
										<button key={`${title}'s screenshot ${idx}`}>
											<img
												src={url}
												alt={`${title}'s screenshot ${idx}`}
												className='m-0'
											/>
										</button>
									))}
							</div>
							<div></div>
						</aside>
					</Dialog.Description>

					<button onClick={() => setOpen(false)} className='absolute top-6 left-8'>
						<Close size='32' className='text-slate-500 hover:text-orange-500' />
					</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
