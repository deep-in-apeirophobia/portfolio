import Chip from "@/components/chip";
import FooterGraphic from "@/components/FooterGraphic";
import HeaderBG from "@/components/HeaderBg";
import ProfileBadge from "@/components/ProfileBadge";
import { Project } from "@/components/Project";
import type { Project as ProjectType } from '@/types/project'

const TECH_FOOTER = ["React", "Vue", "Django", "FastAPI", "Go", "Python", "Docker", "Kubernetes"]

const PROJECTS: ProjectType[] = [
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

export default function Home() {
  return (
    <div className="w-full bg-stone-950 ">
			<ProfileBadge />
			<main className="w-full h-screen relative">
				<HeaderBG />

				<div className="w-full h-full p-12 md:py-[200px] md:px-[300px] grid grid-cols-1 md:grid-cols-12 grid-rows-12 md:grid-rows-6 gap-2">
						<h1 className="max-md:z-20 text-7xl grid grid-cols-12 grid-rows-8 md:grid-rows-6 col-start-1 col-end-11 row-start-3 row-end-10 md:col-start-3 md:col-end-9 md:row-start-1 md:row-end-4 gap-1 md:gap-0">
							<span className="">
								Build
							</span>
							<span className="row-start-2 md:col-start-5 md:row-start-1 -translate-x-6">
								VIBRANT,{' '}
							</span>
							<span className="font-bold [font-family:var(--font-space-grotesk)] col-start-3 row-start-3 md:row-start-2 md:translate-y-3">
								FAST,
							</span>
							<span className="col-start-4 row-start-4 md:row-start-3 -translate-x-6 md:translate-y-5">
								and
							</span>
							<span className="col-start-1 md:col-start-6 row-start-5 md:row-start-4 md:-translate-y-[45%]">
								SCALABLE
							</span>
							<span className="col-start-2 max-md:row-start-6 md:row-start-5 md:-translate-y-[50%]">
								WebApps 
							</span>
							<span className="col-start-3 col-span-10 row-start-7 md:row-start-5 md:col-start-8 md:col-span-5 md:-translate-x-6 translate-y-4 md:-translate-y-[20%] text-nowrap">
								with ME
							</span>
						</h1>
						<h3 className="max-md:z-50 max-md:col-span-10 col-start-2 row-start-11 md:col-start-6 md:col-end-11 md:row-start-4 text-3xl md:text-4xl self-center">
							I&apos;m the Fullstack Dev you need <br className="max-md:hidden"/>
							<span className="md:mx-12"/> to guide you in your journey
						</h3>
				</div>
			</main>

			<section id="projects" className="py-12 flex flex-col gap-12">
				<h4 className="px-8 md:px-20 text-4xl [font-family:var(--font-space-grotesk)]"> Projects </h4>
				{PROJECTS.map(p => (
					<Project key={p.name} project={p} />
				))}
			</section>

			<footer className="bg-black px-12 md:px-20 py-6 w-full flex flex-col md:grid md:grid-cols-3">
				<div className="w-[200px] h-[200px] self-center md:w-[300px] md:h-[300px]">
					<FooterGraphic />
				</div>
				<div className="col-span-2 flex flex-col gap-6 self-center">
					<div className="flex flex-col gap-2">
						<h4 className="text-5xl [font-family:var(--font-marck-script)]">
							Atrin Hojjat
						</h4>
						<h5 className="text-xl [font-family:var(--font-atma)] ">
							If you&apos;re looking to make an amazing app, don&apos;t hesitate to call! <br/>
							I&apos;m here to guide you through your journey.
						</h5>
					</div>

					<p className="flex gap-2 flex-wrap">
						{TECH_FOOTER.map(x => <Chip as="span" key={x}>{x}</Chip>)}
					</p>

					<div className="flex gap-2">
						<span>Email:</span>
						<div className="flex flex-col items-start gap-2">
							<Chip as="a" href="mailto:atrin.hojjat@gmail.com">atrin.hojjat@gmail.com</Chip>
							<Chip as="a" href="mailto:finlayrogers213@outlook.com">finlayrogers213@outlook.com</Chip>
						</div>
					</div>


				</div>
				
			</footer>
    </div>
  );
}


