import type { Project } from '@/types/project'

// Shared portfolio content, used by the main site and by every design-style variant in /styles.

export const PROFILE = {
	name: 'Atrin Hojjat',
	firstName: 'Atrin',
	role: 'Full-stack Developer',
	photo: '/profile-small.jpg',
	greeting: "Hi, I'm Atrin!",
	heroWords: ['Build', 'VIBRANT,', 'FAST,', 'and', 'SCALABLE', 'WebApps', 'with ME'],
	heroTagline: "I'm the Fullstack Dev you need to guide you in your journey",
	footerPitch: [
		"If you're looking to make an amazing app, don't hesitate to call!",
		"I'm here to guide you through your journey.",
	],
}

export const ABOUT = [
	"I'm a creative, passionate developer and love creating new products to improve our lives in anyway that I can. I'm hardworking and like working with different teams. I continuously add new skills to my skill set by researching new technologies that can help both the customer experience and the technical infrastructure.",
	"If you're on an adventurous journey to make an innovative and user friendly product and bridge the gap between you and your users, I'm ready to accompany you through this elusive path. I'm passionate about new and exciting  ideas, seeing them incorporated into users' daily lives.",
]

export const CONTACT = {
	emails: ['hi@atrin.dev', 'atrin.hojjat@gmail.com'],
	links: [
		{ label: 'Github', href: 'https://github.com/deep-in-apeirophobia/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/atrin-h/' },
	],
}

export const TECH_FOOTER = ["React", "Vue", "Django", "FastAPI", "Go", "Python", "Docker", "Kubernetes"]

export const PROJECTS: Project[] = [
	{
		thumbnail: '/projects/1.png',
		name: 'Logo Diffusion',
		description: 'Generating Logos via Custom AI models. With nearly 1M users and 25k generations per week, \nthe project is optimized and constantly monitored to ensure a seamless user experience. ',
		stack: [
			'React', 'FastAPI', 'MongoDB', 'HeadlessUI', 'TailwindCSS',
			'Kubernetes', 'Docker', 'CI/CD',
			'Celery', 'Stripe', 'AI Agents', 'Stable Diffusion',
			'Grafana', 'Prometheus', 'ELK', 'Elasticsearch',
		],
		link: 'https://logodiffusion.com',
	},
	{
		thumbnail: '/projects/3.png',
		name: 'Online Clinic',
		description: `This goal of this application is to provide online access to doctors specially during the Covid-19 pandemic. The website provided a way for patients to request a visit from different doctors\n
			and contact them using the in app chat. It also provided a way to request their prescriptions online and have someone sent to their home to take their tests.`,
		stack: [
			'React', 'Django',
			'Docker', 'Postgres', 'MaterialUI', 'Live Chat',
			'WebRTC', 'RocketChat',
			'Celery', 'Grafana', 'Prometheus',
		],
	},
	{
		thumbnail: '/projects/4.png',
		name: 'Du Protect Solutions',
		description: `After the BLM protests, there was a lot of discussion about how we should attempt to reduce police brutality. \nThe main goal of this application was to reduce the need for physical contact during pullovers, so that the police can call the driver on their phone with their number plate and the driver can provide their identification data during an online video chat.`,
		stack: [
			'React Native', 'Objective C', 'Java', 'Django',
			'Native Call Integration',
			'Jitsi', 'WebRTC', 'Celery', 'Video Processing',
			'Live Video Chat', 'Location Sharing', 'Docker', 'Postgres',
			'Grafana', 'Prometheus', 'ELK'
		],
	},
	{
		thumbnail: '/projects/6.png',
		name: 'Bakery',
		description: ` This project was a portfolio for a bakery where you could order cakes and cookies online. The site had a lot of details and animations to grab the customers attention and increase users' engagement rate.\n I used a lot of different solutions to incorporate animations to the website.\n\n Some of the animations where done using Tailwind and pure CSS, while others used ReactJS to handle timing and styling.\n For more complex animations I used Framer Motion which provided a lot of tools for creating custom and exciting animations. I also used SSG and NextJS to SEO optimize the website.
			`,
		stack: [
			'React', 'Django', 'Framer Motion', 'TailwindCSS',
			'Dynamic Home Page', 'SSR', 'NextJS SEO',
			'Custom Component Library',
		],
	},
	{
		thumbnail: '/projects/5.png',
		name: 'Online Wood Shop',
		description: `This website aimed to provide a variety of online wood products to customers with different needs. It is a online marketplace\n
			where different providers can sell their products with various payment methods. This application had a large number of different customer section, each needing a different way of payment, most of which was rarely used in online marketplaces(Payment using cheques in various times).
			So we needed to implement a system that is intuitive for the user and can handle payment safety all payment types. The site also needed to be SEO optimized and most pages had SSR/SSG to ensure that web crawlers can easily index the website.`,
		stack: [
			'React', 'MaterialUI',
			'Dynamic Home Page', 'SSR', 'NextJS SEO',
			'Custom Component Library',
		],
	},
]
