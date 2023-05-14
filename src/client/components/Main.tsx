import Hero from './Hero';
import Projects from './Projects';

export default function Main() {
	return (
		<main className='flex flex-col gap-48 my-24 grow shrink-0 basis-auto'>
			<Hero />
			<Projects />
		</main>
	);
}
