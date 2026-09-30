import Chip from "@/components/chip";
import FooterGraphic from "@/components/FooterGraphic";
import HeaderBG from "@/components/HeaderBg";
import ProfileBadge from "@/components/ProfileBadge";
import { Project } from "@/components/Project";
import { PROJECTS, TECH_FOOTER } from "@/content/portfolio";

export default function Home() {
  return (
    <div className="w-full bg-stone-950 ">
			<ProfileBadge />
			<main className="w-full h-screen relative">
				<HeaderBG />

				<div className="w-full h-full p-12 md:py-[200px] md:px-[50px] 2xl:px-[150px] grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 grid-rows-12 md:grid-rows-6 gap-2">
						<h1 className="max-md:z-20 text-6xl lg:text-7xl grid grid-cols-12 grid-rows-8 md:grid-rows-6 col-start-1 col-end-11 row-start-3 row-end-10 lg:col-start-2 xl:col-start-3 lg:col-end-12 xl:col-end-9 md:row-start-1 md:row-end-4 gap-3 md:gap-0 lg:min-h-[330px]">
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
						<h3 className="max-md:z-20 max-md:col-span-10 col-start-2 row-start-11 md:col-start-6 md:col-end-11 md:row-start-4 text-3xl md:text-4xl self-center lg:min-h-[80px]">
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
							<Chip as="a" href="mailto:hi@atrin.dev">hi@atrin.dev</Chip>
							<Chip as="a" href="mailto:atrin.hojjat@gmail.com">atrin.hojjat@gmail.com</Chip>
							{/* <Chip as="a" href="mailto:finlayrogers213@outlook.com">finlayrogers213@outlook.com</Chip> */}
						</div>
					</div>


				</div>
				
			</footer>
    </div>
  );
}


