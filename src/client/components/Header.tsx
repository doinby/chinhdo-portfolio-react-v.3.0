export default function Header() {
	return (
		<header className='flex justify-between'>
			<a
				href='/'
				type='text/html'
				className='text-orange-500 font-header text-xl hover:text-orange-700'>
				doinby.co
			</a>
			<ul>
				<li>
					<a
						href='mailto:chinh@doinby.co'
						className='bg-orange-500 text-white p-3 rounded-md hover:bg-orange-700'>
						Get in touch
					</a>
				</li>
			</ul>
		</header>
	);
}
