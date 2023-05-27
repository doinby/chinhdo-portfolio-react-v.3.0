import { Dialog } from '@headlessui/react';

export default ({ isOpen, setOpen, title }) => (
	<Dialog
		as='div'
		open={isOpen}
		onClose={() => setOpen(false)}
		className='relative z-10 outline outline-2 outline-pink-500'>
		<div className='fixed inset-0 flex items-center justify-center'>
			<Dialog.Panel className='w-screen h-screen bg-orange-500'>
				<Dialog.Title>{title}</Dialog.Title>
				<Dialog.Description>
					This will permanently deactivate your account
				</Dialog.Description>

				<p>
					Are you sure you want to deactivate your account? All of your data will be
					permanently removed. This action cannot be undone.
				</p>

				<button onClick={() => setOpen(false)}>Close</button>
			</Dialog.Panel>
		</div>
	</Dialog>
);
