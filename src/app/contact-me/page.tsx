import Chip from "@/components/chip";
import HeaderBG from "@/components/HeaderBg";
import ProfileBadgeAbout from "@/components/ProfileBadgeAbout";


export default function Contact() {
	return (
    <div className="w-full bg-stone-950 ">
			<main className="w-full h-screen relative">
				<HeaderBG />

				<div className="w-full h-full py-36 px-4 md:py-12 z-20 md:px-[500px] flex md:justify-center items-center flex-col gap-12 md:gap-20 ">
					<ProfileBadgeAbout />

					<div className="text-lg md:text-4xl p-8 rounded-lg  bg-neutral-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 max-w-[90%] md:w-[600px] space-y-8">

						<div className="flex gap-2">
							<span>Email:</span>
							<div className="flex flex-row items-center gap-2 flex-wrap">
								<Chip as="a" className="bg-indigo-600/100 text-sm md:text-lg" href="mailto:atrin.hojjat@gmail.com">atrin.hojjat@gmail.com</Chip>
								{/* <Chip as="a" className="bg-indigo-600/100 text-sm md:text-lg" href="mailto:finlayrogers213@outlook.com">finlayrogers213@outlook.com</Chip> */}
							</div>
						</div>

						<div className="flex gap-4">
							<Chip as="a" className="bg-indigo-600/100 text-xl" href="https://github.com/deep-in-apeirophobia/">Github</Chip>
							<Chip as="a" className="bg-indigo-600/100 text-xl" href="https://www.linkedin.com/in/atrin-h/">LinkedIn</Chip>
						</div>
					</div>

				</div>
			</main>

    </div>
	);
}
