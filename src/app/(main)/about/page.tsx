import HeaderBG from "@/components/HeaderBg";
import ProfileBadgeAbout from "@/components/ProfileBadgeAbout";


export default function About() {
	return (
    <div className="w-full bg-stone-950 ">
			<main className="w-full h-screen relative">
				<HeaderBG />

				<div className="w-full h-full py-36 px-4 md:py-12 z-20 md:px-[500px] flex md:justify-center items-center flex-col gap-12 md:gap-20 ">
					<ProfileBadgeAbout />

					<p className="text-lg md:text-2xl p-8 rounded-lg  bg-neutral-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 max-w-[90%] md:max-w-[600px] md:-translate-x-1/4">
						I&apos;m a creative, passionate developer and love creating
						new products to improve our lives in anyway that I
						can. I&apos;m hardworking and like working with different
						teams. I continuously add new skills to my skill set by
						researching new technologies that can help both the
						customer experience and the technical infrastructure.
					</p>
					<p className="text-lg md:text-2xl p-8 rounded-lg  bg-neutral-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 max-w-[90%] md:max-w-[600px] md:translate-x-1/3">
					If you&apos;re on an adventurous journey to make an innovative and user friendly product and bridge the gap between you and your users, I&apos;m ready to accompany you through this elusive path. I&apos;m passionate about new and exciting  ideas, seeing them incorporated into users&apos; daily lives.
					</p>

				</div>
			</main>

    </div>
	);
}
