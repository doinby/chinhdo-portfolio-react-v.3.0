import Hero from './Hero';
import Projects from './Projects';

export default function Main() {
	return (
		<main className='flex-col grow shrink-0 basis-auto'>
			<Hero />
			<Projects />
		</main>
	);
}
