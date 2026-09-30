import Chip from "@/components/chip";
import HeaderBG from "@/components/HeaderBg";
import ProfileBadgeAbout from "@/components/ProfileBadgeAbout";

export default function Contact() {
  return (
    <div className="w-full bg-stone-950">
      <main className="relative h-screen w-full">
        <HeaderBG />

        <div className="z-20 flex h-full w-full flex-col items-center gap-12 px-4 py-36 md:justify-center md:gap-20 md:px-[500px] md:py-12">
          <ProfileBadgeAbout />

          <div className="max-w-[90%] space-y-8 rounded-lg bg-neutral-700 bg-opacity-30 bg-clip-padding p-8 text-lg backdrop-blur-lg backdrop-filter md:w-[600px] md:text-4xl">
            <div className="flex gap-2">
              <span>Email:</span>
              <div className="flex flex-row flex-wrap items-center gap-2">
                <Chip
                  as="a"
                  className="bg-indigo-600/100 text-sm md:text-lg"
                  href="mailto:hi@atrin.dev"
                >
                  hi@atrin.dev
                </Chip>
                <Chip
                  as="a"
                  className="bg-indigo-600/100 text-sm md:text-lg"
                  href="mailto:atrin.hojjat@gmail.com"
                >
                  atrin.hojjat@gmail.com
                </Chip>
                {/* <Chip as="a" className="bg-indigo-600/100 text-sm md:text-lg" href="mailto:finlayrogers213@outlook.com">finlayrogers213@outlook.com</Chip> */}
              </div>
            </div>

            <div className="flex gap-4">
              <Chip
                as="a"
                className="bg-indigo-600/100 text-xl"
                href="https://github.com/deep-in-apeirophobia/"
              >
                Github
              </Chip>
              <Chip
                as="a"
                className="bg-indigo-600/100 text-xl"
                href="https://www.linkedin.com/in/atrin-h/"
              >
                LinkedIn
              </Chip>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
