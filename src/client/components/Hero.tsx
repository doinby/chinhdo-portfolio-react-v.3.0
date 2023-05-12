export default function Hero() {
	return (
		<section className='flex flex-col gap-6 px-16 py-14 shadow-md'>
			<p>
				Hi, I'm Chinh. I'm based in a little city called Sydney from the 🌏{' '}
				<em className='not-italic'>Down Under</em> 🦘
			</p>
			<p>
				As a{' '}
				<em className='not-italic font-header text-2xl text-orange-500'>
					Front-end Developer
				</em>{' '}
				with a keen eye for visual communication, I'm passionate about incorporating
				tech and design to create{' '}
				<em className='not-italic font-header'>top-notch applications.</em>
			</p>
			<p>
				My secret weapon is <em className='not-italic font-header'>emphathy</em>, so
				you can be sure the solution I create is uniquely yours.
			</p>
		</section>
	);
}
