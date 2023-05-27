import About from './About';
import TechILove from './TechI❤️';

export default function Hero() {
	return (
		<section className='prose max-w-none mx-auto w-full flex items-center gap-12 px-20 py-16 shadow-md rounded-md'>
			<img
				src='/images/profile-picture-3000.png'
				alt={`Chinh's Profile Picture`}
				className='m-0'
			/>
			<div>
				<About />
				<TechILove />
			</div>
		</section>
	);
}
