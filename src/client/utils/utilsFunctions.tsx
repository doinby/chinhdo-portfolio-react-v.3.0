export function getStackColour(key: string) {
	switch (key) {
		case 'typescript':
			return 'text-blue-400';
			break;
		case 'tailwind':
			return 'text-teal-400';
			break;
		case 'sass':
			return 'text-pink-400';
			break;
		case 'mui':
			return 'text-violet-400';
			break;
		default:
			return 'text-sky-400';
			break;
	}
}
