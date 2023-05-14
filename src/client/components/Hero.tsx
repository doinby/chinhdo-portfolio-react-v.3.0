import { Heart } from 'styled-icons/entypo';
import {
	ReactLogo as React,
	Nodedotjs as Nodejs,
	Mongodb,
	Tailwindcss,
	Sass,
	Netlify,
} from 'styled-icons/simple-icons';

export default function Hero() {
	return (
		<section className='prose max-w-none mx-auto w-full flex items-center gap-12 px-20 py-16 shadow-md rounded-md'>
			<img
				src='/images/profile-picture-300.png'
				alt={`Chinh's Profile Picture`}
				className='m-0'
			/>
			<div>
				<p className='mt-0'>
					Hi, I'm Chinh. I'm based in a little city called Sydney from the 🌏{' '}
					<em className='not-italic'>Down Under</em> 🦘
				</p>
				<p>
					As a{' '}
					<em className='not-italic font-header text-3xl text-orange-500'>
						Front-end Developer
					</em>{' '}
					with a keen eye for visual communication, I'm passionate about
					incorporating tech and design to create{' '}
					<em className='not-italic font-header'>top-notch applications.</em>
				</p>
				<p>
					My secret weapon is emphathy, so you can be sure my products are carefully
					taylored to{' '}
					<em className='not-italic font-header'>
						you and your stakeholder's needs.
					</em>
				</p>
				<div className='not-prose flex items-bottom gap-6'>
					<p>
						Tech I{' '}
						<span>
							<Heart size='24' className='text-orange-500' />
						</span>{' '}
						:
					</p>
					<div className='flex gap-6'>
						<div className='flex items-center gap-1 text-orange-500'>
							<React size='24' />
							<p className='text-xs'>React</p>
						</div>
						<div className='flex items-center gap-1 text-orange-500'>
							<Nodejs size='24' />
							<p className='text-xs'>Node.js</p>
						</div>
						<div className='flex items-center gap-1 text-orange-500'>
							<Tailwindcss size='24' />
							<p className='text-xs'>Tailwind</p>
						</div>
						<div className='flex items-center gap-1 text-orange-500'>
							<Mongodb size='24' />
							<p className='text-xs'>MongoDB</p>
						</div>
						<div className='flex items-center gap-1 text-orange-500'>
							<Netlify size='24' />
							<p className='text-xs'>Netlify</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
