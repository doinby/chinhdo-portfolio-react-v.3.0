import { GithubWithCircle as Github } from '@styled-icons/entypo-social';
import { LinkedinWithCircle as Linkedin } from '@styled-icons/entypo-social';
import { TwitterWithCircle as Twitter } from '@styled-icons/entypo-social';
import { MailWithCircle as Mail } from '@styled-icons/entypo-social';

export default function Footer() {
	return (
		<footer className='shrink'>
			<section className='w-full flex justify-evenly'>
				<a href='https://www.linkedin.com/in/doinby'>
					<Linkedin
						className='text-slate-500 hover:text-orange-500'
						size='32'
						title='Linkedin Link'
					/>
				</a>
				<a href='https://github.com/doinby'>
					<Github
						className='text-slate-500 hover:text-orange-500'
						size='32'
						title='Github Link'
					/>
				</a>
				<a href='https://twitter.com/doinby'>
					<Twitter
						className='text-slate-500 hover:text-orange-500'
						size='32'
						title='Twitter Link'
					/>
				</a>
				<a href='mailto:chinh@doinby.co'>
					<Mail
						className='text-slate-500 hover:text-orange-500'
						size='32'
						title='E-mail Link'
					/>
				</a>
			</section>
		</footer>
	);
}
